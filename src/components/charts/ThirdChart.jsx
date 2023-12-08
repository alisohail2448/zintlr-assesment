import { ResponsiveBar } from '@nivo/bar'

const data =[
    {
      "country": "AI",
      "hot dog": 30,
      "hot dogColor": "hsl(206, 70%, 50%)",
      "burger": 95,
      "burgerColor": "hsl(341, 70%, 50%)",
      "sandwich": 64,
      "sandwichColor": "hsl(192, 70%, 50%)",
      "kebab": 73,
      "kebabColor": "hsl(24, 70%, 50%)",
      "fries": 192,
      "friesColor": "hsl(77, 70%, 50%)",
      "donut": 135,
      "donutColor": "hsl(158, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 109,
      "hot dogColor": "hsl(145, 70%, 50%)",
      "burger": 52,
      "burgerColor": "hsl(106, 70%, 50%)",
      "sandwich": 115,
      "sandwichColor": "hsl(45, 70%, 50%)",
      "kebab": 41,
      "kebabColor": "hsl(132, 70%, 50%)",
      "fries": 118,
      "friesColor": "hsl(230, 70%, 50%)",
      "donut": 100,
      "donutColor": "hsl(33, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 39,
      "hot dogColor": "hsl(351, 70%, 50%)",
      "burger": 54,
      "burgerColor": "hsl(116, 70%, 50%)",
      "sandwich": 80,
      "sandwichColor": "hsl(249, 70%, 50%)",
      "kebab": 198,
      "kebabColor": "hsl(64, 70%, 50%)",
      "fries": 57,
      "friesColor": "hsl(62, 70%, 50%)",
      "donut": 154,
      "donutColor": "hsl(115, 70%, 50%)"
    }
  ]

export const ThirdChart = () => (
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
    margin={{ top: 10, right: 20, bottom: 0, left: 60 }}
    padding={0.5}
    layout="horizontal"
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