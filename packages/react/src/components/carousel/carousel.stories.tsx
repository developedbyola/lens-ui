import React from "react";
import { Carousel } from ".";
import { Box } from "../box";
import { Text } from "../text";
import { Image } from "../image";
import { Stack } from "../stack";
import { IconButton } from "../button";
import { PhosphorIcon } from "../icon";
import type { Story } from "@ladle/react";

export default {
  title: "Components/Carousel",
};

const Control = () => {
  return (
    <Carousel.Control
      gap="8"
      mt="12"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Carousel.PrevTrigger asChild>
        <IconButton visual="ghost" tone="neutral" shape="circle">
          <PhosphorIcon size="20" weight="bold" name="CaretLeft" />
        </IconButton>
      </Carousel.PrevTrigger>
      <Carousel.NextTrigger asChild>
        <IconButton visual="ghost" tone="neutral" shape="circle">
          <PhosphorIcon size="20" weight="bold" name="CaretRight" />
        </IconButton>
      </Carousel.NextTrigger>
    </Carousel.Control>
  );
};

const IndicatorGroup = ({ length }: { length: number }) => {
  return (
    <Carousel.IndicatorGroup
      mt="12"
      display="flex"
      justifyContent="center"
      gap="4"
    >
      {Array.from({ length }).map((_, index) => (
        <Carousel.Indicator
          width="20"
          height="8"
          key={index}
          index={index}
          rounded="full"
          backgroundColor="bg.subtle"
          _current={{ backgroundColor: "blue.60" }}
        />
      ))}
    </Carousel.IndicatorGroup>
  );
};

const ItemGroup = ({ images }: { images: string[] }) => {
  return (
    <Carousel.ItemGroup height="30rem">
      {images.map((src, index) => (
        <Carousel.Item height="30rem" key={index} index={index}>
          <Image
            src={src}
            width="full"
            rounded="16"
            height="full"
            objectFit="cover"
            alt={`Slide ${index + 1}`}
            backgroundColor="bg.subtle"
          />
        </Carousel.Item>
      ))}
    </Carousel.ItemGroup>
  );
};

// Default carousel with images
export const Default: Story<Carousel.RootProps> = (args) => {
  const images = [
    "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg",
    "https://images.pexels.com/photos/15026737/pexels-photo-15026737.jpeg",
    "https://images.pexels.com/photos/159692/dog-training-joy-fun-159692.jpeg",
    "https://images.pexels.com/photos/1390762/pexels-photo-1390762.jpeg",
  ];

  return (
    <Carousel.Root spacing=".8rem" {...args} slideCount={images.length}>
      <ItemGroup images={images} />
      <Control />
      <IndicatorGroup length={images.length} />
    </Carousel.Root>
  );
};

// Carousel with autoplay
export const Autoplay: Story<Carousel.RootProps> = (args) => {
  const images = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1548247416-ec66f8500b64?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&h=400&fit=crop",
  ];

  return (
    <Carousel.Root
      {...args}
      autoplay
      loop
      spacing=".8rem"
      width="full"
      slideCount={images.length}
    >
      <ItemGroup images={images} />
      <Control />
      <IndicatorGroup length={images.length} />
    </Carousel.Root>
  );
};

// Vertical carousel
export const Vertical: Story<Carousel.RootProps> = (args) => {
  const images = [
    "https://images.pexels.com/photos/16945810/pexels-photo-16945810.jpeg",
    "https://images.pexels.com/photos/2906033/pexels-photo-2906033.jpeg",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=500&fit=crop",
  ];

  return (
    <Carousel.Root
      {...args}
      spacing=".8rem"
      slidesPerPage={1}
      orientation="vertical"
      slideCount={images.length}
    >
      <ItemGroup images={images} />
      <Control />
    </Carousel.Root>
  );
};

// Multiple slides per view
export const MultipleSlides: Story<Carousel.RootProps> = (args) => {
  const images = [
    "https://images.pexels.com/photos/53261/pexels-photo-53261.jpeg",
    "https://images.pexels.com/photos/38632/dog-race-fun-animal-38632.jpeg",
    "https://images.pexels.com/photos/666870/pexels-photo-666870.jpeg",
    "https://images.pexels.com/photos/1407718/pexels-photo-1407718.jpeg",
    "https://images.pexels.com/photos/1577881/pexels-photo-1577881.jpeg",
    "https://images.pexels.com/photos/732456/pexels-photo-732456.jpeg",
  ];

  return (
    <Carousel.Root
      {...args}
      spacing=".8rem"
      slidesPerPage={2}
      slideCount={images.length}
    >
      <ItemGroup images={images} />
      <Control />
      <IndicatorGroup length={images.length / 2} />
    </Carousel.Root>
  );
};

// Interactive example with custom hooks
export const Interactive: Story<Carousel.RootProps> = (args) => {
  const images = [
    "https://images.unsplash.com/photo-1518843025960-d60217f226f5?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop",
  ];

  const Status = () => {
    const api = Carousel.useContext();

    return (
      <Box px="16" py="6" mb="16" rounded="6" backgroundColor="neutral.20">
        <Text size="14" color="neutral.100">
          {`Current page: ${api.page} | Total slides: ${images.length} | Can go next: ${api.canScrollNext ? "Yes" : "No"} | Can go prev: ${api.canScrollPrev ? "Yes" : "No"}`}
        </Text>
      </Box>
    );
  };

  return (
    <Carousel.Root
      {...args}
      spacing=".8rem"
      slideCount={images.length}
      onPageChange={(details) => console.log("Page changed:", details.page)}
    >
      <Status />
      <ItemGroup images={images} />
      <Control />
    </Carousel.Root>
  );
};
