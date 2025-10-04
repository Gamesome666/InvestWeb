import { Shield, Lock, Zap, Eye, Code, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Blockchain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero区域 */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              区块链技术保障
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              利用区块链技术，让每一笔投资都透明、安全、可追溯
            </p>
          </div>

          {/* 三大核心优势 */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">绝对透明</h3>
              <p className="text-gray-600 leading-relaxed">
                所有交易记录永久保存在区块链上，任何人都可以查询验证。没有暗箱操作，没有隐藏费用。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">极致安全</h3>
              <p className="text-gray-600 leading-relaxed">
                去中心化存储，多重加密保护。数据一旦上链，无法篡改或删除，永久保护您的资产安全。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">高效自动</h3>
              <p className="text-gray-600 leading-relaxed">
                智能合约自动执行分红和股权转让，无需人工干预，提高效率，降低成本，避免人为错误。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 技术架构流程图 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            技术架构
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            了解您的投资如何通过区块链技术安全流转
          </p>

          <div className="relative">
            {/* 流程步骤 */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: '投资确认',
                  desc: '您选择项目并确认投资金额',
                  icon: '💰',
                  color: 'blue'
                },
                {
                  step: '2',
                  title: '智能合约',
                  desc: '自动生成智能合约并记录到区块链',
                  icon: '📝',
                  color: 'purple'
                },
                {
                  step: '3',
                  title: 'Token生成',
                  desc: '发行对应数量的股权Token到您的钱包',
                  icon: '🪙',
                  color: 'indigo'
                },
                {
                  step: '4',
                  title: '自动分红',
                  desc: '项目盈利后智能合约自动分配收益',
                  icon: '💸',
                  color: 'green'
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-all h-full">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4 text-2xl`}>
                      {item.icon}
                    </div>
                    <div className={`text-sm font-bold text-${item.color}-600 mb-2`}>
                      步骤 {item.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Token机制说明 */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                股权Token机制
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                每一笔投资都会生成对应的数字股权Token，作为您的资产凭证。Token记录在区块链上，具有以下特性：
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: '永久所有权',
                    desc: 'Token代表真实股权，永久记录在区块链上'
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: '可追溯性',
                    desc: '完整的交易历史和所有权变更记录'
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: '可转让性',
                    desc: '锁定期后可在二级市场自由交易（未来功能）'
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-green-500" />,
                    title: '自动分红',
                    desc: '智能合约自动按Token比例分配收益'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white rounded-xl p-4 shadow-sm">
                    <div className="mr-4 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Token计算示例</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-sm opacity-90 mb-2">投资金额</div>
                  <div className="text-3xl font-bold">€1,000</div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/40 rounded"></div>
                  <div className="mx-4 text-2xl">÷</div>
                  <div className="w-12 h-1 bg-white/40 rounded"></div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-sm opacity-90 mb-2">Token单价</div>
                  <div className="text-3xl font-bold">€10 / Token</div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/40 rounded"></div>
                  <div className="mx-4 text-2xl">=</div>
                  <div className="w-12 h-1 bg-white/40 rounded"></div>
                </div>

                <div className="bg-yellow-400 rounded-xl p-6">
                  <div className="text-sm text-yellow-900 mb-2">您获得</div>
                  <div className="text-4xl font-bold text-yellow-900">100 Tokens</div>
                </div>
              </div>

              <div className="mt-6 text-sm opacity-90">
                * Token数量代表您在项目中的股权比例，用于计算分红收益
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 智能合约示例 */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Code className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">智能合约示例</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              以下是我们平台使用的智能合约核心功能示例（简化版）
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">InvestmentContract.sol</span>
            </div>

            <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
              <code className="text-green-400">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EquityInvestment {
    mapping(address => uint256) public tokenBalance;
    uint256 public totalTokens;
    uint256 public projectValuation;
    
    // 投资函数
    function invest(uint256 amount) public payable {
        require(amount >= 100, "Minimum investment is 100 EUR");
        uint256 tokens = amount / 10;
        tokenBalance[msg.sender] += tokens;
        totalTokens += tokens;
        emit InvestmentMade(msg.sender, amount, tokens);
    }
    
    // 自动分红函数
    function distributeDividends() public {
        uint256 totalDividends = address(this).balance;
        for (address investor in investors) {
            uint256 share = (tokenBalance[investor] * totalDividends) / totalTokens;
            payable(investor).transfer(share);
        }
    }
}`}
              </code>
            </pre>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">代码开源</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">自动执行</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">0</div>
              <div className="text-gray-400">人为干预</div>
            </div>
          </div>
        </div>
      </section>

      {/* 安全保障 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            多重安全保障
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: '多重签名',
                desc: '重要操作需要多方签名确认'
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: '加密存储',
                desc: '私钥采用军事级加密保护'
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: '实时监控',
                desc: '24/7系统监控与异常检测'
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: '定期审计',
                desc: '第三方安全公司定期审计'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-all text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            准备好体验区块链投资了吗？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            从€100开始，安全、透明、高效的创业投资之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/invest/demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              体验投资流程
            </Link>
            <Link
              to="/projects"
              className="bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-all border-2 border-white/20"
            >
              浏览投资项目
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

