"use client";

import React, { useRef, useEffect, useState } from "react";
import { ContentTextBlock } from "./ContentTextBlock";
import {
  Button,
  Card,
  CardBody,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Slider,
} from "@nextui-org/react";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconShare,
  IconCopy,
} from "@tabler/icons-react";

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

  const handleSliderChange = (value: number | number[]) => {
    const newTime = Array.isArray(value) ? value[0] : value;
    player?.seekTo(newTime);
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      {data?.displayContentTextBlock && (
        <ContentTextBlock texts={data?.contentTextBlock} />
      )}
      <div className="container max-w-3xl flex justify-center items-center m-auto my-16">
        {data?.videoSource && (
          <Card
            isBlurred
            className="border-none bg-primary mx-4 sm:mx-0 dark:bg-primary w-full max-w-3xl"
            shadow="sm"
          >
            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="relative col-span-6 md:col-span-4">
                  <div ref={playerRef} className="w-full rounded-lg overflow-hidden pointer-events-none aspect-video" />
                </div>

                <div className="flex flex-col col-span-6 md:col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col text-secondary gap-0">
                      <h1 className="text-large font-medium mt-2">
                        {data?.title}
                      </h1>
                      <p className="text-small text-secondary text-foreground/80">
                        {data?.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col mt-3 gap-1">
                    <Slider
                      aria-label="Video progress"
                      classNames={{
                        track: "bg-default-500/30",
                        thumb:
                          "w-2 h-2 after:w-2 after:h-2 after:bg-secondary",
                      }}
                      color="secondary"
                      value={currentTime}
                      onChange={handleSliderChange}
                      maxValue={duration}
                      size="sm"
                    />
                    <div className="flex text-secondary justify-between">
                      <p className="text-small">{formatTime(currentTime)}</p>
                      <p className="text-small">
                        {formatTime(duration)}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <Button
                      isIconOnly
                      className="w-auto p-2 h-auto data-[hover]:bg-foreground/10"
                      radius="full"
                      variant="light"
                      onClick={isPlaying ? handlePause : handlePlay}
                    >
                      {isPlaying ? (
                        <IconPlayerPause color="#A20100" stroke={2} />
                      ) : (
                        <IconPlayerPlay color="#A20100" stroke={2} />
                      )}
                    </Button>
                    <Popover placement="top">
                      <PopoverTrigger>
                        <Button
                          isIconOnly
                          className="w-auto p-2 h-auto data-[hover]:bg-foreground/10"
                          radius="full"
                          variant="light"
                        >
                          <IconShare color="#A20100" stroke={2} />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Share this video
                          </div>
                          <div className="mt-2 flex items-center">
                            <Input
                              size="sm"
                              value={shareUrl}
                              readOnly
                              className="mr-2"
                            />
                            <Button
                              isIconOnly
                              size="sm"
                              onClick={handleCopyLink}
                            >
                              <IconCopy color="#A20100" size={16} />
                            </Button>
                          </div>
                          <Button className="mt-2 w-full" onClick={handleShare}>
                            Share
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
}
