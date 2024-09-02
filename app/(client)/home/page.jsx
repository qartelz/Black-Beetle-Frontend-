import Image from "next/image"; // For optimized image handling
import Link from "next/link"; // For client-side navigation
// import heroImage from '../public/hero-image.jpg';
import Navbar from "@/components/navbar/page";
import Logo from "@/assets/images/black-beetles-logo.png";
import Illustration from "@/assets/svg/Illustration";
import BoxTopSm from "@/assets/svg/BoxTopSm";
import BoxTopLg from "@/assets/svg/BoxTopLg";

const svgBackground = `
<svg width="1422" height="1104" viewBox="0 0 1422 1104" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_483)">
<rect width="1422" height="1104" fill="#1A1B1A"/>
<mask id="mask0_1_483" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-726" y="-235" width="2486" height="1662">
<path d="M348.683 400.43C348.683 545.849 252.536 663.734 133.931 663.734C15.3271 663.734 -725.699 153.693 -725.699 8.27405C-725.699 -137.145 339.011 63.0513 457.615 63.0513C576.22 63.0513 348.683 255.011 348.683 400.43Z" fill="url(#paint0_linear_1_483)"/>
<path d="M1072.09 1163.57C1072.09 1308.99 975.945 1426.87 857.341 1426.87C738.736 1426.87 78.0087 1392.98 78.0087 1247.56C78.0087 1102.14 126.849 757.673 245.453 757.673C364.057 757.673 1072.09 1018.15 1072.09 1163.57Z" fill="url(#paint1_radial_1_483)"/>
<path d="M1075.7 300.829C1395.72 589.859 1247.89 444.609 1522.76 437.292C1565.88 445.598 1639.08 445.993 1586.92 381.122C1521.73 300.034 1542.74 242.761 1461.27 154.416C1379.8 66.0699 1330.18 -23.6878 1207.19 -164.199C1084.19 -304.711 1074.72 -188.883 936.06 -199.863C797.394 -210.843 860.64 -193.406 669.317 10.4699C477.995 214.346 755.689 11.7989 1075.7 300.829Z" fill="#D9D9D9"/>
<path d="M1233.58 555.456C805.323 605.876 1011.98 590.314 836.447 801.954C801.796 828.927 753.285 883.746 836.447 887.232C940.399 891.589 969.655 945.122 1089.79 942.009C1209.93 938.897 1310.15 960.683 1496.89 960.683C1683.63 960.683 1602.71 877.272 1702.3 780.167C1801.9 683.062 1747.12 719.165 1719.73 440.922C1692.34 162.678 1661.84 505.036 1233.58 555.456Z" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1_483)">
<line x1="-31.8918" y1="602.328" x2="1460.79" y2="602.328" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="921.033" x2="1460.79" y2="921.033" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="283.625" x2="1460.79" y2="283.625" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="1080.39" x2="1460.79" y2="1080.39" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="442.975" x2="1460.79" y2="442.975" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="761.679" x2="1460.79" y2="761.679" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="124.271" x2="1460.79" y2="124.271" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="522.652" x2="1460.79" y2="522.652" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="841.356" x2="1460.79" y2="841.356" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="203.948" x2="1460.79" y2="203.948" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="1000.71" x2="1460.79" y2="1000.71" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="363.299" x2="1460.79" y2="363.299" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="682.005" x2="1460.79" y2="682.005" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="-31.8918" y1="44.5948" x2="1460.79" y2="44.5948" stroke="white" stroke-opacity="0.09" stroke-width="1.24494"/>
<line x1="16.0334" y1="-60.7273" x2="16.0333" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="661.514" y1="-60.7273" x2="661.514" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="338.774" y1="-60.7275" x2="338.774" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="984.25" y1="-60.7273" x2="984.25" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="1306.99" y1="-60.7273" x2="1306.99" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="177.404" y1="-60.7273" x2="177.403" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="822.88" y1="-60.7273" x2="822.88" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="500.144" y1="-60.7273" x2="500.144" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="1145.62" y1="-60.7275" x2="1145.62" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="96.7207" y1="-60.7273" x2="96.7206" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="742.197" y1="-60.7275" x2="742.197" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="419.457" y1="-60.7273" x2="419.457" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="1064.94" y1="-60.7273" x2="1064.94" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="1387.67" y1="-60.7273" x2="1387.67" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="258.091" y1="-60.7273" x2="258.091" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="903.567" y1="-60.7273" x2="903.567" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="580.827" y1="-60.7273" x2="580.827" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<line x1="1226.3" y1="-60.7273" x2="1226.3" y2="1106.68" stroke="white" stroke-opacity="0.09" stroke-width="1.2607"/>
<g opacity="0.7">
<rect x="819.875" y="749.116" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.36"/>
<rect x="421.495" y="749.116" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.25"/>
<rect x="1139.03" y="192.288" width="79.2234" height="78.0916" fill="#D7B257" fill-opacity="0.11"/>
<rect x="500.718" y="113.065" width="79.2234" height="78.0916" fill="#D7B257" fill-opacity="0.31"/>
<rect x="1058.68" y="271.512" width="79.2234" height="78.0916" fill="#D7B257" fill-opacity="0.11"/>
<rect x="420.363" y="192.288" width="79.2234" height="78.0916" fill="#D7B257" fill-opacity="0.31"/>
<rect x="1058.68" y="192.288" width="79.2234" height="78.0916" fill="#D7B257" fill-opacity="0.11"/>
<rect x="420.363" y="113.065" width="79.2234" height="78.0916" fill="#D7B257" fill-opacity="0.31"/>
<rect x="342.271" y="749.116" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.25"/>
<rect x="342.271" y="828.339" width="79.2234" height="80.3552" fill="#D7B257" fill-opacity="0.25"/>
<rect x="182.693" y="669.892" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.25"/>
<rect x="979.454" y="32.71" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.2"/>
<rect x="900.23" y="-57.8311" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.61"/>
<rect opacity="0.2" x="899.364" y="31.5781" width="79.2234" height="80.3552" fill="#D7B257" fill-opacity="0.61"/>
<rect x="182.693" y="110.802" width="80.3552" height="81.4869" fill="#D7B257" fill-opacity="0.24"/>
<rect x="102.338" y="31.5781" width="80.3552" height="79.2234" fill="#D7B257" fill-opacity="0.24"/>
<rect x="23.1143" y="32.71" width="80.3552" height="79.2234" fill="#D7B257" fill-opacity="0.24"/>
<rect x="102.338" y="110.802" width="80.3552" height="81.4869" fill="#D7B257" fill-opacity="0.24"/>
<rect x="421.495" y="-47.6453" width="80.3552" height="79.2234" fill="#D7B257"/>
<rect x="182.693" y="270.38" width="79.2234" height="80.3552" fill="#D7B257" fill-opacity="0.24"/>
<rect x="1218.26" y="749.116" width="79.2234" height="79.2234" fill="#D7B257" fill-opacity="0.3"/>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_1_483" x1="-212.784" y1="81.1031" x2="236.016" y2="320.131" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint1_radial_1_483" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(392.978 1169.75) rotate(-29.3932) scale(767.306 1318.78)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_1_483">
<rect width="1422" height="1104" fill="white"/>
</clipPath>
</defs>
</svg>

`;

const dataUrl = `url("data:image/svg+xml;base64,${Buffer.from(
  svgBackground
).toString("base64")}")`;

const HomePage = () => {
  return (
    <main className="w-full h-[1104px]" style={{ backgroundImage: dataUrl }}>
      <Navbar />

      <section className="flex flex-col md:flex-row items-start justify-between px-[112px] py-[236px] text-white">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-7xl font-bold">
            Discover <br />
            Winning <span className="text-[#B5964D]">Stock.</span>
          </h1>

          <div className="flex items-center  ">
            <h3 className="text-xl   font-light  ">
              Beetle Screener a product of
            </h3>
            <div className="relative w-32 h-16 ">
              <Image
                src={Logo}
                alt="Hero Image"
                layout="fill"
                objectFit="contain"
                className="relative "
              />
            </div>
          </div>

          <p className="text-lg mb-6">
            Identify stocks completing corrections or starting new trends with
            our AI-powered screening tool.
          </p>

          <Link
            href="/your-link"
            className="inline-block bg-[#D7B257] text-black py-2 px-6 rounded-[5px] shadow-lg hover:bg-blue-600 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex">
          <Illustration />
        </div>
      </section>

      <section className="px-[112px] bg-[#1A1B1A]">
        <div >
          <h1 className="text-4xl font-bold mb-8">
            Introducing <span className="text-[#D7B257]">Beetle Screener,</span>{" "}
            <br /> Your Investment Buddy
          </h1>

          <div className="flex space-x-4">
            
          <div className="relative">
  <BoxTopSm className="w-full h-full" />
  <div className="absolute inset-0 flex flex-col items-center overflow-hidden px-4 justify-center text-center">
  <h2 className="text-[#D7B257] font-bold text-2xl mb-4">Ahead of the curve</h2>
  <p>Your tool for spotting stocks in motion, identifying uptrends and downtrends to stay ahead with ease.</p>
</div>
</div>

           

            <BoxTopLg />
            <BoxTopSm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
