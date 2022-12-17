import React, { useEffect, useState } from "react";
import { View,Text,TextInput,FlatList,ActivityIndicator } from "react-native";

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
}

export const TestFetch = () => {
    const [data, setData] = useState<Movie[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json')
            const json = await response.json()
            setData(json)
            return json
        } catch(err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <View>
            {isLoading ? (<ActivityIndicator size="large" color="#d3d3d3" />) : <FlatList 
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                    <Text className="text-red-300 mt-40">{item.title}, {item.releaseYear}</Text>
                )}
            />}
            <Text className="text-white">Mr Man</Text>
            o
        </View>
    )
}