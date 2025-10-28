import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section - 个人简介 */}
        <section className="flex flex-col items-center text-center mb-24 animate-fade-in">
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/avatar.png"
              alt="天明的头像"
              width={180}
              height={180}
              className="relative rounded-full shadow-2xl border-4 border-white dark:border-slate-800 object-cover"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            天明
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
            3年+技术开发经验 · 普通软件开发攻城狮
          </p>

          <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl leading-relaxed">
            一个无法躺平的焦虑青年<br/>
            一个喜欢探索的AI实践者
          </p>
        </section>

        {/* About Section - 关于我 */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
            关于我
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              我是天明,一名热爱技术的软件开发工程师。拥有3年以上的开发经验,专注于AI编程和智能体开发领域。
              我相信技术能够改变世界,也在不断探索AI技术的边界和可能性。
            </p>
          </div>
        </section>

        {/* Skills Section - 技能展示 */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
            技能栈
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 编程语言 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  编程语言
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  C++
                </span>
                <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  Python
                </span>
              </div>
            </div>

            {/* 技术方向 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  技术方向
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                  AI编程
                </span>
                <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                  智能体开发与应用
                </span>
              </div>
            </div>

            {/* 持续探索 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  持续探索
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                  大模型应用
                </span>
                <span className="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                  AI工具链整合
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - 作品展示 */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
            作品展示
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-12 shadow-lg text-center">
            <div className="text-6xl mb-4">👨‍💻</div>
            <p className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
              正在努力 Vibe Coding 中...
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              敬请期待更多精彩作品
            </p>
          </div>
        </section>

        {/* Contact Section - 联系方式 */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-200">
            联系我
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 公众号和微信 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">公众号</p>
                    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      AI破局天明
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">微信</p>
                    <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      aug4ai178
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 微信二维码 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-center">
                扫码添加微信
              </p>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <Image
                  src="/wechat-qr.jpg"
                  alt="微信二维码"
                  width={200}
                  height={200}
                  className="relative rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">
            © 2025 天明. 用心探索AI的无限可能
          </p>
        </footer>
      </main>
    </div>
  );
}
