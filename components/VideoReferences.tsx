"use client";

import React, { useRef, useEffect, useState } from "react";
import { ContentTextBlock } from "./ContentTextBlock";
import { IconPlayerPlay, IconPlayerPause, IconShare, IconCopy } from "@tabler/icons-react";

type Props = {
  data: {
    title: string;
    description: string;
    displayContentTextBlock?: boolean;
    contentTextBlock?: any;
    videoSource?: string;
  };
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function VideoReferences({ data }: Props) {
  const playerRef = useRef<any>(null);
  const [player, setPlayer] = useState<any>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSharePopover, setShowSharePopover] = useState(false);
  const timeUpdateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    if (data.videoSource) {
      const videoId = getVideoId(data.videoSource);
      setShareUrl(`https://youtu.be/${videoId}`);
    }

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: getVideoId(data.videoSource || ""),
        playerVars: {
          autoplay: 0,
          controls: 0,
          color: "white",
          playsinline: 1,
          enablejsapi: 1,
          modestbranding: 0,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
            setDuration(event.target.getDuration());
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startTimeUpdate(event.target);
            } else {
              setIsPlaying(false);
              stopTimeUpdate();
            }
          },
        },
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = () => {};
      stopTimeUpdate();
    };
  }, [data.videoSource]);

  const getVideoId = (url: string) => {
    const videoId = url.split("v=")[1];
    return videoId.split("&")[0];
  };

  const startTimeUpdate = (playerInstance: any) => {
    stopTimeUpdate(); // Clear any existing interval
    timeUpdateIntervalRef.current = setInterval(() => {
      const currentTime = playerInstance.getCurrentTime();
      setCurrentTime(currentTime);
    }, 1000);
  };

  const stopTimeUpdate = () => {
    if (timeUpdateIntervalRef.current) {
      clearInterval(timeUpdateIntervalRef.current);
      timeUpdateIntervalRef.current = null;
    }
  };

  const handlePlay = () => {
    player?.playVideo();
    setIsPlaying(true);
    startTimeUpdate(player);
  };

  const handlePause = () => {
    player?.pauseVideo();
    setIsPlaying(false);
    stopTimeUpdate();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: data.title,
          text: data.description,
          url: shareUrl,
        })
        .catch(console.error);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        // You might want to show a toast or some feedback here
        console.log("Link copied to clipboard");
      })
      .catch(console.error);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    player?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Add touch handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    const newTime = duration * percentage;
    player?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleTouchStart(e);
  };

  return (
    <>
      {data?.displayContentTextBlock && (
        <ContentTextBlock texts={data?.contentTextBlock} />
      )}
      <div className="container max-w-3xl flex justify-center items-center m-auto my-16">
        {data?.videoSource && (
          <div className="w-full max-w-3xl bg-[#FDF1F1] shadow-md rounded-lg overflow-hidden mx-4 sm:mx-0">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                {/* Video Container */}
                <div className="relative w-full">
                  <div 
                    ref={playerRef} 
                    className="w-full rounded-lg overflow-hidden aspect-video"
                  />
                  {/* Add invisible touch layer */}
                  <div 
                    className="absolute inset-0 z-10"
                    onClick={isPlaying ? handlePause : handlePlay}
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col">
                  <h1 className="text-lg font-medium text-[#A20100] mt-2">
                    {data?.title}
                  </h1>
                  <p className="text-sm text-[#A20100]/80">
                    {data?.description}
                  </p>
                </div>

                {/* Progress Bar - Updated for mobile */}
                <div className="flex flex-col gap-1">
                  <div 
                    className="relative w-full h-1 bg-[#D3CACD] rounded touch-none"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                  >
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleSliderChange}
                      className="absolute w-full h-full opacity-0 cursor-pointer touch-none"
                      style={{ WebkitAppearance: 'none' }}
                    />
                    <div 
                      className="absolute h-full bg-[#A20100] rounded"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-[#A20100]">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls - Updated for better mobile touch */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={isPlaying ? handlePause : handlePlay}
                    className="p-2 rounded-full hover:bg-[#E3B2B2] transition-colors touch-none"
                  >
                    {isPlaying ? (
                      <IconPlayerPause className="text-[#A20100]" size={28} stroke={2} />
                    ) : (
                      <IconPlayerPlay className="text-[#A20100]" size={28} stroke={2} />
                    )}
                  </button>

                  {/* Share Button - Updated for mobile */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSharePopover(!showSharePopover)}
                      className="p-2 rounded-full hover:bg-[#E3B2B2] transition-colors touch-none"
                    >
                      <IconShare className="text-[#A20100]" size={28} stroke={2} />
                    </button>
                    
                    {showSharePopover && (
                      <div className="absolute bottom-full mb-2 right-0 w-72 bg-white rounded-lg shadow-lg p-4 z-50">
                        <h3 className="text-sm font-bold mb-2">Bu vıdeoyu paylaş</h3>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={shareUrl}
                            readOnly
                            className="flex-1 px-3 py-1 text-sm border rounded"
                          />
                          <button
                            onClick={handleCopyLink}
                            className="p-2 rounded hover:bg-[#E3B2B2] transition-colors"
                          >
                            <IconCopy className="text-[#A20100]" size={16} />
                          </button>
                        </div>
                        <button
                          onClick={handleShare}
                          className="mt-2 w-full py-2 bg-[#A20100] text-white rounded hover:bg-[#E3B2B2] hover:text-[#A20100] transition-colors"
                        >
                          Paylaş
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
