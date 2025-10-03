'use client';
import React from 'react';
import Link from 'next/link';

export default function AntfolioPrivacyPage() {
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
            개인정보 처리방침
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 1조 개인정보의 처리 목적</h2>
                <p className="mb-4">'Antfolio'는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>회원 가입 의사 확인 및 본인 식별·인증</li>
                  <li>회원자격 유지 및 관리</li>
                  <li>투자 가설 검증 서비스 제공</li>
                  <li>투자 데이터 분석 및 맞춤형 정보 제공</li>
                  <li>포트폴리오 추적 및 성과 분석</li>
                  <li>유료 서비스 이용에 따른 요금 정산</li>
                  <li>서비스 개선을 위한 통계 분석</li>
                  <li>고객 지원 및 문의 응답</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 2조 개인정보의 처리 및 보유 기간</h2>
                <p className="mb-4">'Antfolio'는 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                <p className="mb-4">구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-green-400">회원 가입 및 관리:</span> 서비스 이용계약 또는 회원가입 해지 시까지, 다만 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지</li>
                  <li><span className="font-semibold text-green-400">전자상거래 기록:</span> 계약·청약철회, 대금결제, 서비스 공급기록 - 5년</li>
                  <li><span className="font-semibold text-green-400">소비자 불만 처리:</span> 불만 또는 분쟁처리에 관한 기록 - 3년</li>
                  <li><span className="font-semibold text-green-400">서비스 이용 기록:</span> 접속 로그, 접속 IP 정보, 서비스 이용기록 - 3개월</li>
                  <li><span className="font-semibold text-green-400">투자 가설 및 분석 기록:</span> 가설 검증 내역, 포트폴리오 데이터 - 회원 탈퇴 시까지</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 3조 정보주체의 권리·의무 및 그 행사방법</h2>
                <p className="mb-4">정보주체는 'Antfolio'에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><span className="font-semibold text-emerald-400">개인정보 열람 요구</span></li>
                  <li><span className="font-semibold text-emerald-400">오류 등이 있을 경우 정정 요구</span></li>
                  <li><span className="font-semibold text-emerald-400">삭제 요구</span></li>
                  <li><span className="font-semibold text-emerald-400">처리정지 요구</span></li>
                </ol>
                <p className="mt-4 text-slate-400">위 권리 행사는 개인정보보호법 시행령 제41조에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 'Antfolio'는 이에 대해 지체 없이 조치하겠습니다.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 4조 처리하는 개인정보의 항목</h2>
                <p className="mb-4">'Antfolio'는 다음의 개인정보 항목을 처리하고 있습니다:</p>
                <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">필수항목</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>이메일 주소</li>
                    <li>소셜 로그인 시: 소셜 계정 고유 식별자</li>
                    <li>투자 선호도 및 위험성향 (서비스 제공을 위한 필수 정보)</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">자동 수집 항목</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>서비스 이용 기록</li>
                    <li>접속 로그</li>
                    <li>쿠키, 접속 IP 정보</li>
                    <li>기기 정보 (기기 모델명, OS 버전 등)</li>
                    <li>투자 가설 생성 및 검증 기록</li>
                    <li>포트폴리오 추적 데이터</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-400 mb-3">결제 관련</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>결제 승인번호</li>
                    <li>결제 수단 정보 (카드사명, 결제일시 등)</li>
                    <li>구매 내역</li>
                    <li>프리미엄 서비스 이용 기록</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 5조 개인정보의 파기</h2>
                <p className="mb-4">'Antfolio'는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-2">파기절차</h3>
                    <p>이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-2">파기기한</h3>
                    <p>이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 30일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 30일 이내에 그 개인정보를 파기합니다.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-teal-400 mb-2">파기방법</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>전자적 파일 형태의 정보: 기록을 재생할 수 없는 기술적 방법 사용</li>
                      <li>종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각</li>
                      <li>투자 관련 민감정보: 강화된 암호화 후 완전 삭제</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 6조 개인정보의 안전성 확보 조치</h2>
                <p className="mb-4">'Antfolio'는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-400 mb-3">관리적 조치</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>개인정보 취급 직원의 최소화 및 교육</li>
                      <li>개인정보 보호책임자의 지정 및 운영</li>
                      <li>정기적인 자체 감사 실시</li>
                      <li>투자 데이터 접근 권한 관리</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">기술적 조치</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>개인정보처리시스템 등의 접근권한 관리</li>
                      <li>접근통제시스템 설치 및 운영</li>
                      <li>개인정보의 암호화</li>
                      <li>보안프로그램 설치 및 주기적 갱신</li>
                      <li>투자 포트폴리오 데이터 암호화</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-teal-400 mb-3">물리적 조치</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>전산실, 자료보관실 등의 접근통제</li>
                      <li>개인정보가 포함된 서류, 보조저장매체 등의 잠금장치 사용</li>
                      <li>투자 데이터 서버의 물리적 보안</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">네트워크 보안</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>해킹 등에 대비한 기술적 대책</li>
                      <li>개인정보 전송 시 암호화</li>
                      <li>침입차단시스템을 이용한 접근통제</li>
                      <li>투자 데이터 전송 보안 강화</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 7조 개인정보 보호책임자</h2>
                <p className="mb-6">'Antfolio'는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-4">▶ 개인정보 보호책임자</h3>
                  <div className="space-y-2">
                    <p><span className="font-semibold text-white">성명:</span> hd cho</p>
                    <p><span className="font-semibold text-white">직책:</span> 개인정보 보호책임자</p>
                    <p><span className="font-semibold text-white">연락처:</span> hdcho@yandex.com</p>
                    <p><span className="font-semibold text-white">응답시간:</span> 평일 09:00 ~ 18:00 (토·일·공휴일 제외)</p>
                  </div>
                </div>
                
                <p className="mt-6 text-slate-400">정보주체께서는 'Antfolio'의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다. 'Antfolio'는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 8조 투자 정보 처리 관련 특별 규정</h2>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">투자 관련 면책 조항</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>본 서비스에서 제공하는 투자 가설 검증 및 분석 결과는 정보 제공 목적으로만 사용됩니다.</li>
                    <li>투자 결정은 전적으로 이용자의 책임이며, 투자 손실에 대해 회사는 책임을 지지 않습니다.</li>
                    <li>과거 성과가 미래 수익을 보장하지 않음을 유의해 주시기 바랍니다.</li>
                    <li>투자는 원금 손실의 위험이 있으므로 신중한 판단을 권장합니다.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">제 9조 개인정보 처리방침 변경</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li>이 개인정보처리방침은 <span className="font-semibold text-green-400">2025년 10월 3일</span>부터 적용됩니다.</li>
                  <li>법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</li>
                  <li>이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.</li>
                </ol>
              </section>

              <section className="border-t border-slate-600 pt-8">
                <h2 className="text-2xl font-semibold text-white mb-4">제 10조 기타</h2>
                <div className="space-y-4">
                  <p><span className="font-semibold text-green-400">개인정보 침해신고센터:</span> (privacy.go.kr / 국번없이 182)</p>
                  <p><span className="font-semibold text-emerald-400">대검찰청 사이버범죄수사단:</span> (www.spo.go.kr / 국번없이 1301)</p>
                  <p><span className="font-semibold text-teal-400">경찰청 사이버안전국:</span> (cyberbureau.police.go.kr / 국번없이 182)</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}