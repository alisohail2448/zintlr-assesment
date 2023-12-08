import { ResponsiveLine } from "@nivo/line";
// import { data } from '../constants/constants'

const data = [
  {
    id: "japan",
    color: "hsl(26, 70%, 50%)",
    data: [
      {
        x: "boat",
        y: 137,
      },
      {
        x: "train",
        y: 239,
      },
      {
        x: "subway",
        y: 122,
      },
      {
        x: "bus",
        y: 90,
      },
      {
        x: "car",
        y: 31,
      },
      {
        x: "moto",
        y: 128,
      },
      {
        x: "bicycle",
        y: 73,
      },
      {
        x: "horse",
        y: 256,
      },
      {
        x: "skateboard",
        y: 11,
      },
      {
        x: "others",
        y: 4,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(249, 70%, 50%)",
    data: [
      {
        x: "boat",
        y: 73,
      },
      {
        x: "train",
        y: 157,
      },
      {
        x: "subway",
        y: 285,
      },
      {
        x: "bus",
        y: 291,
      },
      {
        x: "car",
        y: 253,
      },
      {
        x: "moto",
        y: 161,
      },
      {
        x: "bicycle",
        y: 28,
      },
      {
        x: "horse",
        y: 200,
      },
      {
        x: "skateboard",
        y: 112,
      },
      {
        x: "others",
        y: 46,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(217, 70%, 50%)",
    data: [
      {
        x: "boat",
        y: 177,
      },
      {
        x: "train",
        y: 292,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 57,
      },
      {
        x: "car",
        y: 221,
      },
      {
        x: "moto",
        y: 145,
      },
      {
        x: "bicycle",
        y: 214,
      },
      {
        x: "horse",
        y: 199,
      },
      {
        x: "skateboard",
        y: 144,
      },
      {
        x: "others",
        y: 240,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(238, 70%, 50%)",
    data: [
      {
        x: "subway",
        y: 266,
      },
      {
        x: "bus",
        y: 198,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 123,
      },
      {
        x: "bicycle",
        y: 39,
      },
      {
        x: "horse",
        y: 160,
      },
      {
        x: "skateboard",
        y: 68,
      },
      {
        x: "others",
        y: 166,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(296, 70%, 50%)",
    data: [
      {
        x: "subway",
        y: 165,
      },
      {
        x: "bus",
        y: 276,
      },
      {
        x: "car",
        y: 232,
      },
      {
        x: "moto",
        y: 79,
      },
      {
        x: "bicycle",
        y: 294,
      },
      {
        x: "horse",
        y: 30,
      },
      {
        x: "skateboard",
        y: 266,
      },
      {
        x: "others",
        y: 153,
      },
    ],
  },
];

export const SecondChart = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 30, bottom: 0, left: 40 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    enableGridX={false}
    colors={{ scheme: "purple_blue" }}
    lineWidth={4}
    pointSize={2}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor", modifiers: [] }}
    pointLabelYOffset={-7}
    areaOpacity={0}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: true,
        translateX: 200,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
