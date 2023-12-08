import { ResponsiveBar } from '@nivo/bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "country": "AD",
      "hot dog": 29,
      "hot dogColor": "hsl(176, 70%, 50%)",
      "sandwich": 60,
      "sandwichColor": "hsl(303, 70%, 50%)",
      "kebab": 114,
      "kebabColor": "hsl(39, 70%, 50%)",
      "fries": 195,
      "friesColor": "hsl(238, 70%, 50%)",
      "donut": 169,
      "donutColor": "hsl(230, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 73,
      "hot dogColor": "hsl(62, 70%, 50%)",
      "sandwich": 14,
      "sandwichColor": "hsl(105, 70%, 50%)",
      "kebab": 6,
      "kebabColor": "hsl(166, 70%, 50%)",
      "fries": 113,
      "friesColor": "hsl(251, 70%, 50%)",
      "donut": 161,
      "donutColor": "hsl(126, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 99,
      "hot dogColor": "hsl(326, 70%, 50%)",
      "sandwich": 129,
      "sandwichColor": "hsl(327, 70%, 50%)",
      "kebab": 54,
      "kebabColor": "hsl(175, 70%, 50%)",
      "fries": 171,
      "friesColor": "hsl(39, 70%, 50%)",
      "donut": 123,
      "donutColor": "hsl(121, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 62,
      "hot dogColor": "hsl(90, 70%, 50%)",
      "sandwich": 170,
      "sandwichColor": "hsl(166, 70%, 50%)",
      "kebab": 18,
      "kebabColor": "hsl(120, 70%, 50%)",
      "fries": 32,
      "friesColor": "hsl(24, 70%, 50%)",
      "donut": 183,
      "donutColor": "hsl(260, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 90,
      "hot dogColor": "hsl(254, 70%, 50%)",
      "sandwich": 89,
      "sandwichColor": "hsl(227, 70%, 50%)",
      "kebab": 141,
      "kebabColor": "hsl(267, 70%, 50%)",
      "fries": 45,
      "friesColor": "hsl(292, 70%, 50%)",
      "donut": 176,
      "donutColor": "hsl(144, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 31,
      "hot dogColor": "hsl(105, 70%, 50%)",
      "sandwich": 149,
      "sandwichColor": "hsl(193, 70%, 50%)",
      "kebab": 62,
      "kebabColor": "hsl(287, 70%, 50%)",
      "fries": 105,
      "friesColor": "hsl(14, 70%, 50%)",
      "donut": 168,
      "donutColor": "hsl(17, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 54,
      "hot dogColor": "hsl(240, 70%, 50%)",
      "sandwich": 123,
      "sandwichColor": "hsl(260, 70%, 50%)",
      "kebab": 27,
      "kebabColor": "hsl(218, 70%, 50%)",
      "fries": 136,
      "friesColor": "hsl(310, 70%, 50%)",
      "donut": 73,
      "donutColor": "hsl(234, 70%, 50%)"
    }
  ]

export const FirstChart = () => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
        padding={0}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'blues' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor="#005ef9"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0'
                ]
            ]
        }}
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 127,
        //         translateY: -1,
        //         itemsSpacing: 11,
        //         itemWidth: 95,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)