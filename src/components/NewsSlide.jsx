import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import moment from "moment";

const NewsSlide = ({articles}) => {
  const articleData = articles.slice(11,15)
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
        {articleData.map((article, index) => (
          <SwiperSlide key={index}>
            <Box
              position="relative"
              width="100%"
              height="500px"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="lg"
            >
              <Link to={`articles/${article.article_id}`}>
                <Image
                  src={article.article_img_url}
                  alt={article.title}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </Link>

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
                  {article.title}
                </Text>
                <Text color={"white"} fontSize="sm">
                  {article.topic} • {moment(article.created_at).fromNow()}
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
