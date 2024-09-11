import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const newsData = [
  {
    title: "Kids Discuss Coding in Viral Meet Call",
    category: "Coding",
    time: "3 hours ago",
    imageUrl:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?w=700&h=700",
  },
  {
    title: "Cristiano Ronaldo Breaks Goal Record in UEFA",
    category: "Football",
    time: "1 hour ago",
    imageUrl:
      "https://images.pexels.com/photos/338745/pexels-photo-338745.jpeg?w=700&h=700",
  },
  {
    title: "AI Treaty Signed by Global Leaders",
    category: "Technology",
    time: "5 hours ago",
    imageUrl:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?w=700&h=700",
  },
  {
    title: "UK Parliament Debates Climate Policy",
    category: "Politics",
    time: "2 hours ago",
    imageUrl:
      "https://images.pexels.com/photos/27776937/pexels-photo-27776937/free-photo-of-a-mountain-lake-with-a-blue-sky-and-green-grass.jpeg",
  },
];

const NewsSlide = () => {
  return (
    <Box
      w="100%"
      maxW="1240px"
      py="10"
      mx="auto"
      marginTop="50px"
      marginBottom="70px"
    >
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={2}
        slidesPerView={1}
        loop={true}
      >
        {newsData.map((news, index) => (
          <SwiperSlide key={index}>
            <Box
              position="relative"
              width="100%"
              height="500px"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="lg"
            >
              <Image
                src={news.imageUrl}
                alt={news.title}
                width="100%"
                height="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                p="4"
                bgGradient="linear(to-t, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"
                color="white"
              >
                <Text fontSize="xl" color={"white"} fontWeight="bold" mb="2">
                  {news.title}
                </Text>
                <Text color={"white"} fontSize="sm">
                  {news.category} - {news.time}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default NewsSlide;
