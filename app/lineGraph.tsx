// https://betterprogramming.pub/d3-and-react-native-an-essential-guide-to-line-graphs-dc1ce392b440
//https://www.youtube.com/watch?v=5oYE61y4os4&t=181s


/* This code will export a React Native Component that generates a Line Graph from an array of numbers. In the array the numbers
    will indicate the amount of time spent on a habit on a given day.*/ 

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Svg, Defs, LinearGradient, Path, Stop, Line, G, Circle, Rect } from 'react-native-svg';
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
    const domain = [{letter:"Mon", i: 0}, {letter:"Tue", i: 1}, {letter:"Wed", i: 2}, {letter:"Thur", i: 3}, {letter:"Fri", i: 4}, {letter:"Sat", i: 5}, {letter:"Sun", i: 6}];
    const range = Array.from({length: max+1}, (value, index) => index+1);

    const yScale = d3.scaleLinear().domain([0,max+1]).range([height,0]);
    const xScale = d3.scaleLinear().domain([0, 6]).range([0,width]);

    const lineFunction = d3.line<number>().x((d, ix) => xScale(ix)).y((d, ix) => yScale(d));

    const svgLine = lineFunction(data);

    return <View style={{margin: 25}} onLayout={ev => {setWidth(ev.nativeEvent.layout.width)}} width={300}>
        <Svg width={width} height={height} stroke="grey" >

            {range.map(y => (<View key={y}>
                                <Text style={{position: 'absolute', top: yScale(y)-10, left: -15}}>{y}</Text>
                                <Line  x1="0" x2={width} y1={yScale(y)} y2={yScale(y)} strokeWidth={1} stroke="grey" strokeOpacity={0.5} strokeDasharray={[5,5]}/>
                            </View>))}

            {domain.map(day => (<View key={day.i}>
                                <Text style={{position: 'absolute', top: height, left: xScale(day.i)-15}}>{day.letter}</Text>
                                <Line x1={xScale(day.i)} x2={xScale(day.i)} y1={0} y2={height} strokeWidth={1} stroke="grey" strokeOpacity={0.5} strokeDasharray={[5,5]}/>
                            </View>))}

            <Path d={svgLine} stroke="black" fill="none" strokeWidth={3} strokeLinejoin='bevel' strokeLinecap='square'/>

            <Rect x={0} width={width} height={height} fill="none" stroke="black" strokeWidth={2} rx={5}/>
        </Svg>
    </View>
}
