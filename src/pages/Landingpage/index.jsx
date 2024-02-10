import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const LandingpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 font-inter h-[982px] mx-auto pt-[17px] px-[17px] relative w-full"
        style={{ backgroundImage: "url('images/img_landingpage.png')" }}
      >
        <div className="absolute md:block flex flex-col md:gap-[] md:gap-x-[] md:gap-y-[] h-max inset-y-[0] items-center justify-end my-auto md:px-5 right-[3%] md:top-[90px] w-[90%]">
          <div className="flex flex-col gap-[50px] items-start justify-start w-full">
            <div className="md:h-[572px] h-[616px] relative w-full">
              <div className="absolute bottom-[0] flex flex-col gap-[49px] md:gap-[50px] items-start justify-start left-[0] w-[43%] md:w-full">
                <div className="flex flex-col md:grid items-start md:items-stretch justify-start md:justify-start md:overflow-auto w-full">
                  <Text
                    className="sm:absolute sm:flex-col flex-row grid sm:grid-cols-1 sm:hidden sm:items-start sm:justify-center leading-[111.50%] ml-0.5 md:ml-[0] sm:p-[] sm:pb-[] sm:pl-[] sm:pr-[] sm:pt-[] relative md:text-5xl text-[65px] text-blue_gray-900 top-5 tracking-[-0.65px] w-full"
                    size="txtInterBold65"
                  >
                    <>
                      One step towards <br />a healthy lifestyle
                    </>
                  </Text>
                  <Img
                    className="h-[17px] md:ml-[0] ml-[354px] mt-0.5"
                    src="images/img_vector39.svg"
                    alt="vectorThirtyNine"
                  />
                  <Text
                    className="leading-[170.00%] ml-0.5 md:ml-[0] mt-[21px] text-blue_gray-900 text-lg tracking-[-0.18px] w-[87%] sm:w-full"
                    size="txtInterMedium18"
                  >
                    A healthy body is the secret of healthy lifestyle. Start
                    your day with Gadaha. Get Fit Today.
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start mt-[43px] w-[74%] md:w-full">
                    <Button className="cursor-pointer font-semibold leading-[normal] min-w-[214px] text-center text-lg">
                      Download the App
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[167px] text-center text-lg"
                      variant="outline"
                    >
                      Invite friends
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start ml-0.5 md:ml-[0] w-[45%] md:w-full">
                  <div className="flex flex-row gap-[9px] items-start justify-start w-[51%] md:w-full">
                    <Img
                      className="h-[23px] mb-[5px] shadow-bs2 w-[23px]"
                      src="images/img_star9.svg"
                      alt="starNine"
                    />
                    <Text
                      className="mt-[3px] text-blue_gray-900 text-xl"
                      size="txtInterMedium20"
                    >
                      4.8 Rating
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <div className="flex relative w-2/5">
                        <div className="flex my-auto w-[69%]">
                          <Img
                            className="h-[37px] my-auto rounded-[50%] w-[37px]"
                            src="images/img_ellipse491.png"
                            alt="ellipse491"
                          />
                          <Img
                            className="h-[37px] ml-[-4.89px] my-auto rounded-[50%] w-[37px] z-[1]"
                            src="images/img_ellipse492.png"
                            alt="ellipse492"
                          />
                        </div>
                        <Img
                          className="h-[37px] ml-[-4.9px] my-auto rounded-[50%] w-[37px] z-[1]"
                          src="images/img_ellipse493.png"
                          alt="ellipse493"
                        />
                      </div>
                      <Img
                        className="h-[37px] md:h-auto rounded-[50%] w-[37px]"
                        src="images/img_ellipse494.png"
                        alt="ellipse494"
                      />
                      <Text
                        className="mt-2.5 text-blue_gray-900 text-lg"
                        size="txtInterMedium18"
                      >
                        300+ joined
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute md:h-[572px] h-[607px] inset-y-[0] md:m-[] md:mt-[Auto%] my-auto md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] md:relative right-[0] md:top-5 w-[69%] md:w-full">
                <Img
                  className="absolute h-[572px] md:hidden right-[0] top-[0]"
                  src="images/img_bgadjustment.svg"
                  alt="bgadjustment"
                />
                <div className="absolute md:block bottom-[0] h-[517px] md:items-start md:justify-start left-[0] md:m-[] md:mb-[] md:ml-[] md:mr-[] md:mt-[] md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] w-[92%] md:w-full">
                  <Img
                    className="absolute h-[517px] md:h-[55px] md:hidden inset-[0] justify-center m-auto object-cover w-[98%]"
                    src="images/img_shadow.png"
                    alt="shadow"
                  />
                  <Img
                    className="absolute h-[455px] md:h-[55px] md:hidden inset-x-[0] mx-auto object-cover top-[0] w-[98%] md:w-[]"
                    src="images/img_image1958.png"
                    alt="image1958"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[27px] md:grid items-center justify-start ml-0.5 md:ml-[0] w-[93%] md:w-full">
              <div className="md:h-11 h-[55px] relative w-1/5">
                <Img
                  className="absolute bottom-[0] h-3.5 right-[0]"
                  src="images/img_vector39_blue_a700.svg"
                  alt="vectorThirtyNine_One"
                />
                <Text
                  className="absolute left-[0] md:overflow-hidden md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] md:relative text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 top-[0] md:top-[] tracking-[-0.90px]"
                  size="txtInterBold36"
                >
                  Top workouts
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[69px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-blue-50 flex flex-1 flex-col items-center justify-start rounded-[32px] w-full">
                  <div className="h-[225px] relative w-full">
                    <Img
                      className="h-[225px] m-auto object-cover md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] w-full"
                      src="images/img_maskgroup.png"
                      alt="maskgroup"
                    />
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[11%] my-auto w-[59%]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 tracking-[-0.25px]"
                        size="txtInterBold25"
                      >
                        <>
                          Yoga
                          <br />
                          Training
                        </>
                      </Text>
                      <Text
                        className="mt-[3px] text-[15.43px] text-gray-600 tracking-[-0.15px]"
                        size="txtInterSemiBold1543"
                      >
                        For Beginners
                      </Text>
                      <div className="flex flex-row gap-[17px] items-center justify-between mt-[22px] w-full">
                        <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-row gap-[4.92px] h-[35px] md:h-auto items-center justify-center px-[11.47px] py-2 rounded-[17px] w-[93px]">
                          <div className="md:h-5 h-[22px] relative w-[22px]">
                            <Img
                              className="absolute bottom-[0] h-5 left-[0] object-cover w-5"
                              src="images/img_image1453.png"
                              alt="image1453"
                            />
                            <Img
                              className="absolute h-5 object-cover right-[0] top-[0] w-5"
                              src="images/img_image1454.png"
                              alt="image1454"
                            />
                          </div>
                          <Text
                            className="text-[14.75px] text-black-900 tracking-[-0.15px] w-auto"
                            size="txtInterSemiBold1475"
                          >
                            15 Min
                          </Text>
                        </div>
                        <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-row gap-[4.92px] h-[35px] md:h-auto items-center justify-center px-[11.47px] py-2 rounded-[17px] w-[106px]">
                          <div className="h-5 md:h-[18px] relative w-5">
                            <Img
                              className="absolute bottom-[0] h-[18px] left-[0] object-cover w-[18px]"
                              src="images/img_image1453_18x18.png"
                              alt="image1453_One"
                            />
                            <Img
                              className="absolute h-[18px] object-cover right-[0] top-[0] w-[18px]"
                              src="images/img_image1454_18x18.png"
                              alt="image1454_One"
                            />
                          </div>
                          <Text
                            className="text-[14.75px] text-black-900 tracking-[-0.15px] w-[55px]"
                            size="txtInterSemiBold1475"
                          >
                            200 Cal
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50_01 flex flex-1 flex-col items-end justify-start sm:pl-5 pl-[21px] rounded-[32px] w-full">
                  <div
                    className="bg-cover bg-no-repeat md:h-56 h-[225px] relative w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_maskgroup_225x350.png')",
                    }}
                  >
                    <Img
                      className="absolute h-56 inset-y-[0] my-auto object-cover right-[0] rounded-[32px] w-[53%]"
                      src="images/img_image1953.png"
                      alt="image1953"
                    />
                    <div className="absolute flex flex-col items-start justify-start left-[5%] top-[14%]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 tracking-[-0.25px]"
                        size="txtInterBold25"
                      >
                        <>
                          Cardio
                          <br />
                          Training
                        </>
                      </Text>
                      <Text
                        className="text-[15.43px] text-gray-600 tracking-[-0.15px]"
                        size="txtInterSemiBold1543"
                      >
                        For Intermediates
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700_e5 border border-solid border-white-A700 bottom-[15%] flex flex-row gap-[4.92px] h-[35px] md:h-auto items-center justify-center left-[5%] px-[11.47px] py-2 rounded-[17px] w-[105px]">
                      <div className="md:h-5 h-[22px] relative w-[22px]">
                        <Img
                          className="absolute bottom-[0] h-5 left-[0] object-cover w-5"
                          src="images/img_image1453_20x20.png"
                          alt="image1453"
                        />
                        <Img
                          className="absolute h-5 object-cover right-[0] top-[0] w-5"
                          src="images/img_image1454_20x20.png"
                          alt="image1454"
                        />
                      </div>
                      <Text
                        className="text-[17.2px] text-black-900 tracking-[-0.17px] w-[55px]"
                        size="txtInterSemiBold172"
                      >
                        28 Min
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700_e5 border border-solid border-white-A700 bottom-[15%] flex flex-row gap-[4.92px] h-[35px] md:h-auto items-center justify-center px-[11.47px] py-2 right-[30%] rounded-[17px] w-[106px]">
                      <div className="h-5 md:h-[18px] relative w-5">
                        <Img
                          className="absolute bottom-[0] h-[18px] left-[0] object-cover w-[18px]"
                          src="images/img_image1453_18x18.png"
                          alt="image1453_One"
                        />
                        <Img
                          className="absolute h-[18px] object-cover right-[0] top-[0] w-[18px]"
                          src="images/img_image1454_18x18.png"
                          alt="image1454_One"
                        />
                      </div>
                      <Text
                        className="text-[14.75px] text-black-900 tracking-[-0.15px] w-[54px]"
                        size="txtInterSemiBold1475"
                      >
                        260 Cal
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-50_01 flex flex-1 flex-col items-end justify-start sm:pl-5 pl-6 rounded-[32px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row h-[225px] items-start justify-end pl-3 pt-3 w-full"
                    style={{
                      backgroundImage:
                        "url('images/img_maskgroup_225x350.png')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start mt-[21px] w-[32%]">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-900 tracking-[-0.25px]"
                        size="txtInterBold25"
                      >
                        <>
                          CrossFit <br />
                          Training
                        </>
                      </Text>
                      <Text
                        className="mt-[3px] text-[15.43px] text-gray-600 tracking-[-0.15px]"
                        size="txtInterSemiBold1543"
                      >
                        For Experts
                      </Text>
                      <div className="bg-white-A700_e5 border border-solid border-white-A700 flex flex-row gap-[4.92px] h-[35px] md:h-auto items-center justify-center mt-[22px] px-[11.47px] py-2 rounded-[17px] w-[93px]">
                        <div className="md:h-5 h-[22px] relative w-[22px]">
                          <Img
                            className="absolute bottom-[0] h-5 left-[0] object-cover w-5"
                            src="images/img_image1453_1.png"
                            alt="image1453"
                          />
                          <Img
                            className="absolute h-5 object-cover right-[0] top-[0] w-5"
                            src="images/img_image1454_1.png"
                            alt="image1454"
                          />
                        </div>
                        <Text
                          className="text-[14.75px] text-black-900 tracking-[-0.15px] w-auto"
                          size="txtInterSemiBold1475"
                        >
                          14 min
                        </Text>
                      </div>
                    </div>
                    <div className="h-[213px] ml-[3px] relative w-[67%]">
                      <Img
                        className="absolute h-[213px] inset-y-[0] my-auto object-cover right-[0] rounded-[32px] w-[86%]"
                        src="images/img_image1947.png"
                        alt="image1947"
                      />
                      <div className="absolute bg-white-A700_e5 border border-solid border-white-A700 bottom-[15%] flex flex-row gap-[4.92px] h-[35px] md:h-auto items-center justify-center left-[0] px-[11.47px] py-2 rounded-[17px] w-[106px]">
                        <div className="h-5 md:h-[18px] relative w-5">
                          <Img
                            className="absolute bottom-[0] h-[18px] left-[0] object-cover w-[18px]"
                            src="images/img_image1453_18x18.png"
                            alt="image1453_One"
                          />
                          <Img
                            className="absolute h-[18px] object-cover right-[0] top-[0] w-[18px]"
                            src="images/img_image1454_18x18.png"
                            alt="image1454_One"
                          />
                        </div>
                        <Text
                          className="text-[14.75px] text-black-900 tracking-[-0.15px] w-[55px]"
                          size="txtInterSemiBold1475"
                        >
                          350 Cal
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <header className="absolute flex sm:flex-col flex-row md:gap-5 inset-x-[0] items-center sm:items-start justify-center mx-auto md:px-5 sm:top-[3px] top-[4%] w-full">
          <Img
            className="common-pointer h-[43px] mb-2.5 sm:mt-0 mt-1 w-[43px]"
            src="images/img_close.svg"
            alt="close"
            onClick={() => navigate(-1)}
          />
          <Text
            className="sm:block sm:flex-col sm:items-stretch sm:justify-start sm:m-[] sm:ml-[0] ml-[13px] sm:mt-0 mt-1 sm:text-[32.65px] md:text-[38.65px] text-[42.65px] text-blue-A700 tracking-[-1.07px]"
            size="txtInterBold4265"
          >
            Gadaha
          </Text>
          <ul className="flex md:flex-1 sm:flex-col flex-row sm:hidden items-start justify-center sm:ml-[0] ml-[78px] sm:mt-0 my-4 w-[36%] md:w-full common-row-list">
            <li>
              <a
                href="javascript:"
                className="text-[19.19px] text-blue_gray-900"
              >
                <Text size="txtInterSemiBold1919">Features</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="ml-10 text-[19.19px] text-blue_gray-900"
              >
                <Text size="txtInterSemiBold1919">Pricing</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="ml-[38px] text-[19.19px] text-blue_gray-900"
              >
                <Text size="txtInterSemiBold1919">Community</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="ml-[43px] text-[19.19px] text-blue_gray-900"
              >
                <Text size="txtInterSemiBold1919">Lifestyle</Text>
              </a>
            </li>
          </ul>
          <div className="flex md:flex-1 flex-row gap-5 items-center justify-center mb-[3px] sm:ml-[0] ml-[165px] w-[10%] md:w-full">
            <Button
              className="flex h-[54px] sm:hidden items-center justify-center w-[54px]"
              shape="circle"
              color="white_A700"
            >
              <Img
                className="h-[21px]"
                src="images/img_frame7.png"
                alt="frameSeven"
              />
            </Button>
            <Button
              className="flex h-[54px] sm:hidden items-center justify-center w-[54px]"
              shape="circle"
              color="white_A700"
            >
              <Img
                className="h-[23px]"
                src="images/img_frame6.png"
                alt="frameSix"
              />
            </Button>
          </div>
          <Button className="cursor-pointer font-semibold h-14 sm:hidden leading-[normal] sm:ml-[0] ml-[79px] md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] text-[19.19px] text-center w-[173px]">
            Get Started
          </Button>
        </header>
      </div>
    </>
  );
};

export default LandingpagePage;
