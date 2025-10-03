'use client';
import React from 'react';
import Link from 'next/link';

export default function AntfolioTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950">
      {/* Header */}
      <header className="relative z-20 px-6 py-6 border-b border-slate-800">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <img
                src="/icon.png"
                alt="Antfolio 로고"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling;
                  if (fallback) {
                    target.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-xl flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-xl">A</span>
              </div>
            </div>
            <div>
              <span className="text-white text-2xl font-bold">Antfolio</span>
              <span className="text-green-200 text-sm ml-2">Connect the Dots</span>
            </div>
          </Link>
          
          <Link
            href="/"
            className="text-slate-300 hover:text-white transition-colors duration-300"
          >
            홈으로 돌아가기
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            서비스 이용약관
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 1조 목적</h2>
                <p>본 약관은 Antfolio(이하 "회사"라 함)에서 제공하는 Antfolio 및 Antfolio 관련 제반 서비스(이하 "서비스"라 함)를 이용함에 있어 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로 합니다.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 2조 약관의 효력 및 변경</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>본 약관은 서비스를 이용하고자 본 약관에 동의한 모든 회원에 대하여 그 효력을 발생합니다.</li>
                  <li>본 약관의 내용은 회원(서비스) 가입 시 게재되거나 공지된 내용에 회원이 동의함으로써 그 효력이 발생합니다.</li>
                  <li>회사는 약관이 변경되는 경우에는 적용 일자 및 개정 내용, 개정 사유 등을 명시하여 적용일로부터 7일 전에 홈페이지 또는 전자메일(E-mail) 또는 서비스 내의 공지 등을 통해 공지합니다.</li>
                  <li>회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 공지 이후 효력 발생일까지 거부의 의사 표시를 하지 아니한 경우는 변경된 약관에 동의한 것으로 간주됩니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 3조 약관의 해석과 예외 준칙</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>회사는 제공하는 개별 서비스에 대해서 별도의 이용약관 및 정책을 둘 수 있으며, 해당 내용이 본 약관과 상충할 경우 개별 서비스의 이용약관을 우선하여 적용합니다.</li>
                  <li>본 약관에 명시되지 않은 사항은 전자거래기본법, 전자상거래 등에서의 소비자 보호에 관한 법률, 약관의 규제에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련법령의 규정에 따릅니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 4조 이용 계약의 성립</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>서비스 가입 신청 시 본 약관을 읽고 "동의함" 버튼을 클릭하면 본 약관에 동의하는 것으로 간주됩니다.</li>
                  <li>이용약관은 서비스 이용희망자의 이용약관 동의 후 이용 신청에 대하여 회사가 승낙함으로써 성립됩니다.</li>
                  <li>가입신청자는 제 1항의 이용 신청 시 본인의 실명 및 실제 정보를 기재하여야 합니다. 내용이 사실과 다를 경우(차명, 비 실명, 허위정보 등)와 타인의 정보를 도용한 것으로 의심되는 경우 사실 여부를 확인하기 위해 재 증명을 요구할 수 있으며 상이한 사실이 명백하게 확인되는 경우, 본 약관에 의한 회원의 권리를 주장할 수 없고, 회사는 회원에게 환급 없이 회원의 권한을 삭제하며 서비스의 전면적인 이용을 거부할 수 있고, 이로 인해 발생하는 모든 불이익은 회사가 책임지지 않습니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 5조 회원에 대한 통지</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>회사가 회원에 대한 통지를 하는 경우 이 약관에 별도의 규정이 없는 한 이메일, SMS, 앱푸시 알림 등으로 할 수 있습니다.</li>
                  <li>회원 전체에 대한 통지의 경우 회사는 7일 이상 서비스 초기화면에 게시하거나 공지사항 게시판에 게시함으로써 제1항의 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래에 관하여 중대한 영향을 미치는 사항에 대하여는 개별 통지합니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 6조 이용 계약 체결</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>이용계약은 서비스를 이용하려는 자(이하 "가입신청자")가 "Antfolio" 서비스 및 제반 서비스에서 제공하는 약관에 동의한 다음 회원가입 신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다. 필요한 경우 회사는 본인 확인 기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다.</li>
                  <li>카카오, 구글, 애플 등 외부 서비스와의 연동을 통해 회원가입 신청을 한 경우, 가입신청자가 이 약관과 개인정보처리방침, 서비스 제공을 위해 회사가 회원의 외부 서비스 계정 정보 접근 및 활용에 동의하고 회사가 이러한 신청에 승낙함으로써 이용계약이 체결됩니다.</li>
                  <li>회사는 업무 수행상 또는 기술상 지장이 있을 경우 일정시간 가입승인을 유보할 수 있습니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 7조 서비스의 내용</h2>
                <p className="mb-4">회사가 제공하는 서비스의 내용은 다음과 같습니다:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-green-400">투자 가설 생성 및 검증:</span> 사용자의 투자 아이디어를 체계적으로 검증하는 도구 제공</li>
                  <li><span className="font-semibold text-emerald-400">데이터 기반 분석:</span> 시장 데이터, 기업 정보 등을 종합한 투자 분석</li>
                  <li><span className="font-semibold text-teal-400">포트폴리오 추적:</span> 투자 성과 및 가설 검증 결과 모니터링</li>
                  <li><span className="font-semibold text-cyan-400">투자 교육 콘텐츠:</span> 체계적 투자 방법론 및 교육 자료 제공</li>
                  <li><span className="font-semibold text-green-500">커뮤니티 기능:</span> 투자자 간 의견 교환 및 가설 공유</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 12조 회원의 의무</h2>
                <p className="mb-4">회원은 다음 각 호에 해당하는 행위를 해서는 안됩니다:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>이용 신청 또는 회원정보 변경 시 허위내용 등록하는 경우</li>
                  <li>타인의 정보를 도용하는 경우</li>
                  <li>회사의 운영자, 임직원, 회사를 사칭하는 경우</li>
                  <li>다른 사용자의 정보를 부정하게 취득하는 행위를 하는 경우</li>
                  <li>외설, 폭력적인 메시지, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위를 하는 경우</li>
                  <li>허위사실 유포 및 사기 행위를 하는 경우</li>
                  <li>투자 권유 또는 불법적인 투자 조언을 하는 경우</li>
                  <li>타인에게 특정 종목의 매수/매도를 권유하는 행위</li>
                  <li>미공개 정보를 이용한 불공정 거래 관련 정보를 공유하는 경우</li>
                </ul>
              </section>

              <section className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">제 15조 투자 관련 특별 규정</h2>
                <ol className="list-decimal list-inside space-y-3">
                  <li><span className="font-semibold text-yellow-400">서비스 성격:</span> 본 서비스는 투자 의사결정을 위한 정보 제공 및 분석 도구로서, 투자 권유나 조언이 아닙니다.</li>
                  <li><span className="font-semibold text-yellow-400">투자 책임:</span> 모든 투자 결정은 회원 본인의 판단과 책임 하에 이루어지며, 투자 손실에 대해 회사는 어떠한 책임도 지지 않습니다.</li>
                  <li><span className="font-semibold text-yellow-400">수익 보장 금지:</span> 회사는 어떠한 형태의 투자 수익도 보장하지 않으며, 과거 성과가 미래 수익을 보장하지 않습니다.</li>
                  <li><span className="font-semibold text-yellow-400">위험 고지:</span> 모든 투자에는 원금 손실의 위험이 있으며, 회원은 본인의 위험 감수 능력 내에서 투자하시기 바랍니다.</li>
                  <li><span className="font-semibold text-yellow-400">법적 준수:</span> 회원은 자본시장법, 금융투자업법 등 관련 법령을 준수하여야 합니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 20조 책임제한</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>회사는 회원의 약관, 서비스 이용 방법 및 이용 기준을 준수하지 않는 등 회원의 귀책 사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
                  <li>회사는 서비스를 통하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 보증하지 않습니다.</li>
                  <li>회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.</li>
                  <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지, 해결이 곤란한 기술적 결함 기타 불가항력으로 인하여 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
                  <li><span className="text-red-400 font-semibold">회사에서 제공하는 투자 분석 정보 및 가설 검증 결과를 참고하여 투자를 하는 경우, 회원에게 발생하는 손실에 대해서는 회사가 책임지지 않습니다.</span></li>
                  <li><span className="text-red-400 font-semibold">투자는 높은 위험성을 수반하므로, 회원은 신중한 투자 결정을 하시기 바랍니다.</span></li>
                  <li><span className="text-red-400 font-semibold">회사는 회원이 서비스를 통해 얻은 정보나 자료를 근거로 한 투자 결정에 대해 어떠한 보증이나 배상 책임을 지지 않습니다.</span></li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 25조 개인정보보호</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>회사는 관련법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다.</li>
                  <li>개인정보의 보호 및 사용에 대해서는 관련법령 및 회사의 개인정보처리방침이 적용됩니다.</li>
                  <li>회원의 투자 정보 및 포트폴리오 데이터는 강화된 보안 조치로 보호됩니다.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 28조 약관 외 준칙</h2>
                <p>본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 「약관의 규제에 관한 법률」,「정보통신망이용촉진 및 정보보호 등에 관한 법률」,「자본시장과 금융투자업에 관한 법률」,「콘텐츠산업진흥법」 등 관련 법령에 따릅니다.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 29조 관할 법원</h2>
                <p>서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 30조 재판권 및 준거법</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>이 약관 및 서비스 이용과 관련하여 회사와 회원 간에 제기된 법적 분쟁은 대한민국 법령에 의하여 규율, 해석 및 집행됩니다.</li>
                  <li>이 약관 및 서비스 이용과 관련하여 회사와 회원 간에 발생한 분쟁에 대해서는 각 당사자가 선의에 기초한 협의를 통해 해결책을 모색하되, 이러한 협의로 분쟁이 해결되지 아니할 경우, 민사소송법에 의한 관할법원에서 소송으로 해결합니다.</li>
                </ol>
              </section>

              <section className="border-t border-slate-600 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-4">부칙</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>본 약관은 2025년 10월 3일부터 적용됩니다.</li>
                  <li>종전의 약관은 본 약관으로 대체합니다.</li>
                </ol>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}