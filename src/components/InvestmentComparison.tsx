import React from 'react';
import { TrendingUp, TrendingDown, Check, X } from 'lucide-react';

const InvestmentComparison = () => {
  const comparisons = [
    {
      category: "Appreciation",
      land: { value: "8-12% annually", positive: true },
      gold: { value: "2-4% annually", positive: false },
      shares: { value: "Variable", positive: false }
    },
    {
      category: "Risk Level",
      land: { value: "Low", positive: true },
      gold: { value: "Medium", positive: false },
      shares: { value: "High", positive: false }
    },
    {
      category: "Physical Asset",
      land: { value: true, positive: true },
      gold: { value: true, positive: true },
      shares: { value: false, positive: false }
    },
    {
      category: "Development Potential",
      land: { value: true, positive: true },
      gold: { value: false, positive: false },
      shares: { value: false, positive: false }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Investment Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-600">
                  Land
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-yellow-600">
                  Gold
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-blue-600">
                  Shares
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisons.map((comparison, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {comparison.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {typeof comparison.land.value === 'boolean' ? (
                      comparison.land.value ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <div className="flex items-center">
                        {comparison.land.value}
                        {comparison.land.positive ? (
                          <TrendingUp className="h-4 w-4 text-green-500 ml-2" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500 ml-2" />
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {typeof comparison.gold.value === 'boolean' ? (
                      comparison.gold.value ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <div className="flex items-center">
                        {comparison.gold.value}
                        {comparison.gold.positive ? (
                          <TrendingUp className="h-4 w-4 text-green-500 ml-2" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500 ml-2" />
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {typeof comparison.shares.value === 'boolean' ? (
                      comparison.shares.value ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <X className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <div className="flex items-center">
                        {comparison.shares.value}
                        {comparison.shares.positive ? (
                          <TrendingUp className="h-4 w-4 text-green-500 ml-2" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500 ml-2" />
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default InvestmentComparison;