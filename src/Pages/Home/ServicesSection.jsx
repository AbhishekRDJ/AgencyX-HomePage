import React from 'react';
import Button from "../../components/Header/Header_btn"; // Import the Button component

const ServicesSection = () => {
  return (
    <div className="bg-[#f2f1f6] px-4 py-16 w-full">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4 mx-auto max-w-7xl">
        {/* Web Design Agency Card */}
        <div className="bg-white shadow-sm p-8 rounded-lg h-140 transition-transform hover:-translate-y-7 duration-300 cursor-pointer">
          <div className="mb-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none"><path d="M48 63.6343C51.1066 63.6343 53.625 61.1159 53.625 58.0093C53.625 54.9027 51.1066 52.3843 48 52.3843C44.8934 52.3843 42.375 54.9027 42.375 58.0093C42.375 61.1159 44.8934 63.6343 48 63.6343Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M48 52.3842V29.6067" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M47.9999 29.6067H57.3749L70.198 64.3954C70.198 64.3954 61.5841 71.6973 60.2397 80.0626H35.7601C34.4157 71.6973 25.8018 64.3954 25.8018 64.3954L38.6249 29.6067H47.9999Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.2407 80.0625H65.7592" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M60.2008 80.0625H35.7986V93.1875H60.2008V80.0625Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M53.625 8.4375C53.625 11.5442 51.1067 14.0625 48 14.0625C44.8933 14.0625 42.375 11.5442 42.375 8.4375C42.375 5.33081 44.8933 2.8125 48 2.8125C51.1067 2.8125 53.625 5.33081 53.625 8.4375Z" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.4375 53.625C5.33081 53.625 2.8125 51.1067 2.8125 48C2.8125 44.8933 5.33081 42.375 8.4375 42.375C11.5442 42.375 14.0625 44.8933 14.0625 48C14.0625 51.1067 11.5442 53.625 8.4375 53.625Z" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M87.5625 53.625C84.4558 53.625 81.9375 51.1067 81.9375 48C81.9375 44.8933 84.4558 42.375 87.5625 42.375C90.6692 42.375 93.1875 44.8933 93.1875 48C93.1875 51.1067 90.6692 53.625 87.5625 53.625Z" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.83496 42.375C11.3043 25.0275 25.0275 11.3043 42.375 8.83496H8.83496" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M87.165 42.375C84.6956 25.0275 70.9725 11.3043 53.625 8.83496H87.165" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          
          <h2 className="mb-4 font-bold text-gray-900 text-3xl">Web Design Agency</h2>
          
          <p className="text-gray-600">
            As a leading web design and digital agency, our design and development specialists take all measures to ensure your website works like no other.
          </p>
        </div>

        {/* Mobile App Development Card */}
        <div className="bg-white shadow-sm p-8 rounded-lg transition-transform hover:-translate-y-7 duration-300 cursor-pointer">
          <div className="mb-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none"><path d="M61.4437 35.0237C61.3331 35.0329 61.2224 35.0552 61.1144 35.0912L57.7702 36.2059C57.4218 36.322 57.041 36.2985 56.7118 36.136C55.9494 35.7598 55.1593 35.4315 54.3453 35.1548C53.9981 35.0368 53.7127 34.7843 53.5486 34.4562L51.9727 31.3045C51.7346 30.828 51.2476 30.5271 50.7149 30.5271H45.2849C44.7523 30.5271 44.2653 30.828 44.0272 31.3045L42.4513 34.4562C42.2872 34.7843 42.002 35.0368 41.6546 35.1548C40.8404 35.4313 40.0503 35.7597 39.2881 36.136C38.9587 36.2985 38.5781 36.322 38.2297 36.2059L34.8854 35.0912C34.3801 34.9229 33.8231 35.0543 33.4464 35.431L29.6068 39.2706C29.2301 39.6473 29.0986 40.2044 29.267 40.7097L30.3817 44.0539C30.4979 44.4023 30.4743 44.7831 30.3118 45.1124C29.9356 45.8747 29.6073 46.6648 29.3306 47.4788C29.2126 47.826 28.9601 48.1114 28.6319 48.2755L25.4803 49.8514C25.0038 50.0895 24.7029 50.5765 24.7029 51.1092V56.5392C24.7029 57.0719 25.0038 57.5588 25.4803 57.7969L28.6319 59.3729C28.9601 59.5369 29.2126 59.8221 29.3306 60.1695C29.6071 60.9837 29.9354 61.7738 30.3118 62.536C30.4743 62.8654 30.4978 63.246 30.3817 63.5944L29.267 66.9387C29.0986 67.444 29.2301 68.001 29.6068 68.3777L33.4464 72.2174C33.8231 72.594 34.3801 72.7255 34.8854 72.5571L38.2297 71.4424C38.5781 71.3262 38.9589 71.3498 39.2881 71.5123C40.0505 71.8885 40.8406 72.2168 41.6546 72.4935C42.0018 72.6115 42.2872 72.864 42.4513 73.1922L44.0272 76.3439C44.2653 76.8203 44.7523 77.1212 45.2849 77.1212H50.7149C51.2476 77.1212 51.7346 76.8203 51.9727 76.3439L53.5486 73.1922C53.7127 72.864 53.9979 72.6115 54.3453 72.4935C55.1594 72.217 55.9496 71.8887 56.7118 71.5123C57.0412 71.3498 57.4218 71.3264 57.7702 71.4424L61.1144 72.5571C61.6198 72.7255 62.1768 72.594 62.5535 72.2174L66.3931 68.3777C66.7698 68.001 66.9013 67.444 66.7329 66.9387L65.6182 63.5944C65.5019 63.246 65.5256 62.8652 65.6881 62.536C66.0643 61.7736 66.3926 60.9835 66.6693 60.1695C66.7873 59.8223 67.0398 59.5369 67.3679 59.3729L70.5196 57.7969C70.9961 57.5588 71.297 57.0719 71.297 56.5392V51.1092C71.297 50.5765 70.9961 50.0895 70.5196 49.8514L67.3679 48.2755C67.0398 48.1114 66.7873 47.8262 66.6693 47.4788C66.3928 46.6647 66.0644 45.8745 65.6881 45.1124C65.5256 44.7829 65.5021 44.4023 65.6182 44.0539L66.7329 40.7097C66.9013 40.2044 66.7698 39.6473 66.3931 39.2706" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M39.2636 48L33.4395 53.8241L39.2636 59.6484" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M56.7363 48L62.5605 53.8241L56.7363 59.6484" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M50.912 48L45.0879 59.6484" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.6936 85.8573H89.9062C92.495 85.8573 94.5937 83.7586 94.5937 81.1698V21.791" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.40625 21.791V81.17C1.40625 83.7588 3.50494 85.8575 6.09375 85.8575H17.1311" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.4349 10.1426H6.09375C3.50494 10.1426 1.40625 12.2413 1.40625 14.8301V21.791H94.5938V14.8301C94.5938 12.2413 92.4951 10.1426 89.9062 10.1426H16.9974" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="88.7695" cy="15.9668" r="1.40625" fill="black"></circle><circle cx="82.9453" cy="15.9668" r="1.40625" fill="black"></circle><circle cx="77.1211" cy="15.9668" r="1.40625" fill="black"></circle></svg>
          </div>
          
          <h2 className="mb-4 font-bold text-gray-900 text-3xl">Mobile App Development</h2>
          
          <p className="text-gray-600">
            We're can guide you through the whole process of delivering first class apps from start to finish.
          </p>
        </div>

        {/* Digital Marketing Card */}
        <div className="bg-white shadow-sm p-8 rounded-lg transition-transform hover:-translate-y-7 duration-300 cursor-pointer">
          <div className="mb-40">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <g clip-path="url(#clip0_42_379)">
    <path d="M5.15625 45.395V8.99208" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M5.15625 87.0518V50.589" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M45.4188 90.8438H8.95996" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M72.0879 90.8438H50.5649" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M87.0478 90.8438H78.6611" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M90.8438 50.5532V87.0598" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M90.8438 8.92815V45.4548" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M50.5571 5.15625H87.0718" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M24.8613 5.15625H45.4387" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.96411 5.15625H18.1" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.90625 1.40625H1.40625V8.90625H8.90625V1.40625Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M94.5937 1.40625H87.0938V8.90625H94.5937V1.40625Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M93.375 45.4688H88.3125V50.5312H93.375V45.4688Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M7.6875 45.4688H2.625V50.5312H7.6875V45.4688Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M50.5312 2.625H45.4688V7.6875H50.5312V2.625Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M50.5312 88.3125H45.4688V93.375H50.5312V88.3125Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M8.90625 87.0938H1.40625V94.5938H8.90625V87.0938Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M94.5937 87.0938H87.0938V94.5938H94.5937V87.0938Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M55.1576 33.1568L49.8577 18.048C49.568 17.2268 48.845 16.6498 47.9988 16.5336C47.8983 16.5199 47.7957 16.5131 47.6907 16.5131H39.1857C38.2119 16.5131 37.3428 17.1289 37.019 18.048L15.8964 78.2638C15.6864 78.8614 16.1313 79.4863 16.763 79.4863H23.7378C24.2396 79.4863 24.7139 79.3221 25.0994 79.0391C25.4529 78.7793 25.7311 78.4189 25.8909 77.9901L26.873 75.3473M29.1736 69.1566L30.3247 66.0593H56.5839L60.9719 77.9833C61.3029 78.8865 62.165 79.4863 63.1274 79.4863H70.1135C70.4534 79.4863 70.7409 79.3061 70.8982 79.0438C71.0351 78.8201 71.0761 78.5396 70.9803 78.2638L57.3382 39.3733M33.3856 56.6828L43.4394 27.8351L48.0147 40.8814L53.5572 56.6828H33.3856Z" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M39.448 66.0593L35.0142 77.9901C34.6788 78.8888 33.8214 79.4863 32.8612 79.4863H23.7378" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M48.0147 40.8815L42.5088 56.6829" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M47.6909 16.5131H48.3091H56.8143C57.7882 16.5131 58.657 17.1289 58.981 18.0482L80.1037 78.2638C80.3135 78.8614 79.871 79.4863 79.2369 79.4863H70.1137" stroke="#636EDF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
  </g>
  <defs>
    <clipPath id="clip0_42_379">
      <rect width="96" height="96" fill="white"></rect>
    </clipPath>
  </defs>
</svg>

          </div>
          
          <h2 className="mb-4 font-bold text-gray-900 text-3xl">Digital Marketing</h2>
          
          <p className="text-gray-600">
            Now more than ever, your digital presence is vital. Wherever your customers can find you, you need to make an impact.
          </p>
        </div>

        {/* Call to Action Card */}
        <div className="bg-[#6366f1] p-8 rounded-lg text-white transition-transform hover:-translate-y-7 duration-300 cursor-pointer">
          <div className="mb-4">
            <div className="mb-2 text-white text-sm">• Need help</div>
            <h2 className="mb-6 font-bold text-4xl">
              Free advice. Book a callback.
            </h2>
          </div>
          
          <div className="mt-auto pt-8">
             
              <Button/>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;