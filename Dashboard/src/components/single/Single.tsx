import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  charts?: {
    dataKeys: { name: string; color: string }[];
    data: { name: string; correct: number; wrong: number }[][];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title} {props.id}</h1>
            {/* <button>Update</button> */}
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div>
          {
            props.charts && props.charts.data.map((data) => (
              <ResponsiveContainer width="50%" height={400} style={{display: "inline-block"}}>
                <LineChart data={data.flat()}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props.charts && props.charts.dataKeys.map((dataKey) => (
                    <Line
                      key={dataKey.name}
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            ))
          };
        </div>

      </div>
    </div>
  );
};

export default Single;
