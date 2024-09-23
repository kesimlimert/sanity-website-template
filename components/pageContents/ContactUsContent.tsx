"use client";
import { useNavbarStore } from "@/lib/store";
import { useEffect } from "react";

type Props = {
	data: any;
}

export function ContactUsContent({ data }: Props) {
	const { setActiveItem } = useNavbarStore();
	useEffect(() => {
		setActiveItem(data?.slug.current);
	}, [setActiveItem, data?.slug]);
	return (
		<>
			<p>Contact Us</p>
		</>
	)
}