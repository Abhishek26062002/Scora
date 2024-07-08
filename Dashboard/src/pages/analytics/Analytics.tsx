
import Image1 from "../../sampleImages/1.jpg";
import Image2 from "../../sampleImages/2.jpeg";
import Image3 from "../../sampleImages/3.jpeg";
import Image4 from "../../sampleImages/4.jpg";
import Image5 from "../../sampleImages/5.jpg";



const Analytics = () => {
    const images = [Image1, Image2, Image3, Image4, Image5];

    return (
        <div className="analytics">
            <h1>Analytics</h1>
            <div className="images">
                {images && images.map((image) => (
                    <img src={image} alt="analytics" width="45%" height="45%" style={{margin: "15px"}}/>
                ))}
            </div>
        </div>
    );
};

export default Analytics;
