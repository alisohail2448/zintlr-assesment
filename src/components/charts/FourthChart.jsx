import { ResponsiveBar } from '@nivo/bar'

const data = [
    {
      "country": "AD",
      "hot dog": 65,
      "hot dogColor": "hsl(58, 70%, 50%)",
      "burger": 122,
      "burgerColor": "hsl(343, 70%, 50%)",
      "sandwich": 173,
      "sandwichColor": "hsl(246, 70%, 50%)",
      "kebab": 50,
      "kebabColor": "hsl(263, 70%, 50%)",
      "fries": 159,
      "friesColor": "hsl(90, 70%, 50%)",
      "donut": 67,
      "donutColor": "hsl(313, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 143,
      "hot dogColor": "hsl(64, 70%, 50%)",
      "burger": 66,
      "burgerColor": "hsl(211, 70%, 50%)",
      "sandwich": 167,
      "sandwichColor": "hsl(55, 70%, 50%)",
      "kebab": 111,
      "kebabColor": "hsl(340, 70%, 50%)",
      "fries": 151,
      "friesColor": "hsl(360, 70%, 50%)",
      "donut": 39,
      "donutColor": "hsl(230, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 105,
      "hot dogColor": "hsl(268, 70%, 50%)",
      "burger": 73,
      "burgerColor": "hsl(107, 70%, 50%)",
      "sandwich": 144,
      "sandwichColor": "hsl(304, 70%, 50%)",
      "kebab": 66,
      "kebabColor": "hsl(129, 70%, 50%)",
      "fries": 134,
      "friesColor": "hsl(283, 70%, 50%)",
      "donut": 83,
      "donutColor": "hsl(28, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 126,
      "hot dogColor": "hsl(125, 70%, 50%)",
      "burger": 198,
      "burgerColor": "hsl(51, 70%, 50%)",
      "sandwich": 160,
      "sandwichColor": "hsl(248, 70%, 50%)",
      "kebab": 134,
      "kebabColor": "hsl(347, 70%, 50%)",
      "fries": 149,
      "friesColor": "hsl(100, 70%, 50%)",
      "donut": 36,
      "donutColor": "hsl(156, 70%, 50%)"
    },
  ]

export const FourthChart = () => (
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
        padding={0.35}
        groupMode="grouped"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'oranges' }}
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
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
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
        enableGridX={true}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)