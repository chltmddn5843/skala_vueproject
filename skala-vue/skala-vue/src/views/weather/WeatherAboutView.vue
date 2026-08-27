<template>
  <section class="about-view">
    <header class="hero">
      <span class="eyebrow">Vue 3 Weather Dashboard</span>
      <h2>날씨 API와 Vue 학습 과정을 한곳에서 확인하세요.</h2>
      <p>
        SKALA Weather는 실시간 날씨 조회부터 Composition API, 컴포넌트 분리,
        Axios 통신과 Cloudflare 배포까지 단계별로 구성한 실습 프로젝트입니다.
      </p>
      <RouterLink to="/weather" class="primary-link">실시간 날씨 보기</RouterLink>
    </header>

    <div class="feature-grid">
      <article>
        <strong>실시간 날씨</strong>
        <p>OpenWeather API로 도시의 기온, 날씨 상태와 습도를 조회합니다.</p>
      </article>
      <article>
        <strong>안전한 API 연동</strong>
        <p>Cloudflare Worker가 API 키를 보호하고 Vue 앱에 날씨 데이터를 전달합니다.</p>
      </article>
      <article>
        <strong>MVVM 구조</strong>
        <p>Model, Service, ViewModel, View를 분리해 데이터 흐름을 명확하게 구성했습니다.</p>
      </article>
      <article>
        <strong>통일된 Mock 데이터</strong>
        <p>인천, 부산, 대전, 광주, 대구 데이터를 모든 학습 화면에서 함께 사용합니다.</p>
      </article>
      <article>
        <strong>PrimeVue UI</strong>
        <p>검색, 단위 선택, 오류 메시지와 2초 Skeleton 로딩 화면을 적용했습니다.</p>
      </article>
      <article>
        <strong>단계별 Vue 예제</strong>
        <p>Mockup, Composition API, 컴포넌트 분리, Axios CRUD 예제를 비교할 수 있습니다.</p>
      </article>
    </div>

    <div class="flow">
      <h3>프로젝트 흐름</h3>
      <p>도시 검색 → ViewModel 상태 관리 → Axios Service → Cloudflare Worker → OpenWeather API</p>
    </div>
  </section>
</template>

<style scoped>
.about-view { display: grid; gap: 20px; }
.hero {
  padding: clamp(24px, 5vw, 40px);
  color: white;
  background: linear-gradient(135deg, #315fca, #7397ed);
  border-radius: 16px;
}
.eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; opacity: 0.8; }
.hero h2 { max-width: 480px; margin: 10px 0; font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 700; line-height: 1.35; }
.hero p { max-width: 520px; margin-bottom: 20px; color: #edf3ff; }
.primary-link {
  display: inline-block;
  padding: 10px 16px;
  color: #315fca;
  background: white;
  border-radius: 9px;
  font-weight: 700;
  text-decoration: none;
}
.feature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.feature-grid article,
.flow { padding: 18px; background: #f8faff; border: 1px solid var(--color-border); border-radius: 12px; }
.feature-grid strong,
.flow h3 { color: var(--color-heading); font-weight: 700; }
.feature-grid p,
.flow p { margin-top: 6px; color: #6f7d91; font-size: 14px; }

@media (max-width: 560px) {
  .feature-grid { grid-template-columns: 1fr; }
}
</style>
