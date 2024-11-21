// https://betterprogramming.pub/d3-and-react-native-an-essential-guide-to-line-graphs-dc1ce392b440
//https://www.youtube.com/watch?v=5oYE61y4os4&t=181s


/* This code will export a React Native Component that generates a Line Graph from an array of numbers. In the array the numbers
    will indicate the amount of time spent on a habit on a given day.*/ 

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Svg, Defs, LinearGradient, Path, Stop, Line, G, Circle } from 'react-native-svg';
import * as d3 from 'd3';

export type LineGraphProps = {
    data: number[];
    label: string;
    stat: string;
    color: string;
};

const GRAPH_ASPECT_RATIO = 9/16;

export function LineGraph(props: LineGraphProps) {
    const [width, setWidth] = useState(0);
    const height = 200
    const data = props.data;

    const min = Math.min(...props.data);
    const max = Math.max(...props.data);

    {/* https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/ */}
    const domain = Array.from({length: data.length}, (value, index) => index);
    const range = Array.from({length: max - 1}, (value, index) => index + 1);

    const yScale = d3.scaleLinear().domain([min,max]).range([height,0]);
    const xScale = d3.scaleLinear().domain([0,props.data.length - 1]).range([0,width]);

    const lineFunction = d3.line<number>().x((d, ix) => xScale(ix)).y((d, ix) => yScale(d));

    const svgLine = lineFunction(data);

    return <View style={{borderColor: "grey", borderWidth: 2, margin: 25}} onLayout={ev => {setWidth(ev.nativeEvent.layout.width)}} width={300}>
        <Svg width={width} height={height} >
            {range.map(y => (<View key={y}>
                                <Text style={{position: 'absolute', top: yScale(y+1), left: -15}}>{y}</Text>
                                <Line  x1="0" x2={width} y1={yScale(y)} y2={yScale(y)} strokeWidth={1} stroke="grey"/>
                            </View>))}
            {domain.map(x => (<View key={x}>
                                <Text style={{position: 'absolute', top: height, left: xScale(x)}}>{x}</Text>
                                <Line x1={xScale(x)} x2={xScale(x)} y1={0} y2={height} strokeWidth={1} stroke="grey"/>
                            </View>))}
            {data.map((d, i) => (<Circle stroke="red" key={i} cx={xScale(i)} cy={yScale(d)} r="2.5" />))}
            <Path d={svgLine} stroke="black" fill="none" strokeWidth={2} />
        </Svg>
    </View>
}
