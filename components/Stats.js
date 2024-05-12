// components/Stats.js
import React from 'react';

const Stats = () => {
  return (
    <div className="max-w-full overflow-x-auto">
      <table className="table-auto mx-auto bg-grey-500 border border-gray-500 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">Format</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">Inn</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">NO</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">Runs</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">HS</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">Avg</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">BF</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">SR</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">100</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">200</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">50</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">4s</th>
            <th className="px-4 py-2 text-sm text-gray-800 font-bold border-b border-gray-200">6s</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">Test</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">50</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">86</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">2863</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">199</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">34.08</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">5481</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">52.23</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">8</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">0</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">14</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">344</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">24</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">ODI</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">75</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">70</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">2820</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">112</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">50.36</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">3211</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">87.82</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">7</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">0</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">18</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">224</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">61</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">T20I</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">72</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">68</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">2265</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">110</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">37.75</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">1628</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">139.13</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">2</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">0</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">22</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">191</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">99</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">IPL</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">130</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">121</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">4623</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">132</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">45.77</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">3435</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">134.59</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">4</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">0</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">36</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">396</td>
            <td className="px-4 py-2 text-sm text-gray-400 border-b border-gray-200">184</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
