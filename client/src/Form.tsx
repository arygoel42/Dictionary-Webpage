import React from "react";
import { Box, Button, Flex, Text, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useGlobalStore from "./store";
import axios from "axios";

const Form = () => {
  const { word, setWord } = useGlobalStore();
  const [meaning, setMeaning] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let newWord = "";
    newWord = event.target[0].value;
    setWord(newWord);

    try {
      const response = await fetch("http://localhost:3007/api/getWord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: newWord }),
      });

      const data = await response.json();

      if (response.ok) {
        setMeaning(data);
        setError("");
      } else {
        setError(data.error || "Unknown error occurred");
        setMeaning(""); // Clear meaning
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (word === "") {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
        width="100%"
      >
        <Text fontFamily="times-new-roman" fontSize="4xl" fontWeight="bold">
          Seach Dictonary!
        </Text>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Input type="text" placeholder="Search..."></Input>
        </form>
      </Flex>
    );
  }
  if (word !== "") {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100%"
        width="100%"
      >
        <VStack>
          <Text fontFamily="times-new-roman" fontSize="4xl" fontWeight="bold">
            {word}
          </Text>
          {error ? (
            <Text color="red.500" fontWeight="bold">
              {error}
            </Text>
          ) : (
            <Text
              fontFamily="times-new-roman"
              fontSize="25xl"
              fontWeight="bold"
            >
              {meaning}
            </Text>
          )}

          <Button
            onClick={() => {
              setWord("");
              setMeaning("");
              setError("");
            }}
          >
            Clear
          </Button>
        </VStack>
      </Flex>
    );
  }
};

export default Form;
