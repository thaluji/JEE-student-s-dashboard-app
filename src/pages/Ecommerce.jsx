import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {
  const {currentColor,currentMode} = useStateContext();
  return (
    <div className='mt-12'>
       <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Last test report</p>
              <p className="text-2xl">KEAM:70.1%</p>
            </div>

          </div>
          <div className="mt-6">
            <Button
             color="white"
             bgColor={currentColor}
             text="Mock Test"
             borderRadius="10px"
             />
            </div>
        
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
      {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-white ml-2`}>
                  {item.percentage}
                </span>
              </p>
              {/* <p className="text-sm text-gray-400  mt-1">{item.title}</p> */}
            </div>
          ))}
        
      </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Progress Report</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Your score</span>
              </p>
              <p className="flex items-center gap-2 text-red-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Average score</span>
              </p>
            </div>
          </div>
           
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">Class Rank</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    +5
                  </span>
                </p>
                <p className="text-gray-500 mt-1">23</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">AITS Rank</p>

                <p className="text-gray-500 mt-1">412</p>
              </div>

              <div className="mt-3">
                <SparkLine currentColor="dark" id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                   bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
              </div>
              <div> 
                < Stacked width="320px"
                   height= "300px"/>
              </div>
              </div>



          </div>
          </div>
      </div>
  )
}

export default Ecommerce