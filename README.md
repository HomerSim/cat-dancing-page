# 🐱 고양이 댄싱 파티 (Cat Dancing Party)

5가지 댄스를 추는 귀여운 고양이 애니메이션 웹페이지

🌐 **Live Demo:** https://homersim.github.io/cat-dancing-page/

![Cat Dancing Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Vite](https://img.shields.io/badge/Vite-5+-purple)

## ⭐ 주요 기능

- **5가지 댄스 애니메이션**: bounce, wiggle, spin, jump, shake
- **인터랙티브 컨트롤**: 댄스 시작/정지, 댄스 타입 변경
- **반응형 디자인**: 모바일, 태블릿, 데스크탑 최적화
- **SVG 벡터 그래픽**: 확장 가능한 고품질 이미지
- **부드러운 애니메이션**: CSS3 Keyframes와 GPU 가속 활용

## 🛠️ 기술 스택

- **Frontend**: React 18+, Vite
- **Styling**: CSS3 (Keyframes), 반응형 디자인
- **Graphics**: SVG 벡터 이미지
- **Deployment**: GitHub Pages

## 🚀 설치 및 실행

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm install gh-pages --save-dev
npx gh-pages -d dist
```

### GitHub Pages 설정

1. **Vite 설정 수정** (GitHub Pages 경로 설정):
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/cat-dancing-page/',  // GitHub 저장소명과 일치
})
```

2. **GitHub 저장소 설정**:
   - GitHub 저장소 → Settings → Pages
   - Source: "Deploy from a branch" 선택
   - Branch: "gh-pages" 선택
   - Folder: "/ (root)" 선택

## 📁 프로젝트 구조

```
src/
├── components/
│   └── DancingCat.jsx        # 메인 고양이 댄싱 컴포넌트
├── assets/
│   └── images/
│       └── cat.svg           # SVG 고양이 이미지
├── styles/
│   ├── global.css           # 전역 스타일
│   └── animations.css       # 댄스 애니메이션 정의
└── App.jsx                  # 메인 앱 컴포넌트
```

## 🎨 애니메이션 종류

1. **Bounce** - 통통 튀는 동작
2. **Wiggle** - 좌우로 흔드는 동작
3. **Spin** - 360도 회전 동작
4. **Jump** - 점프하는 동작
5. **Shake** - 빠르게 진동하는 동작

## 🤖 개발 정보

이 프로젝트는 **Claude Code**를 활용하여 개발되었습니다.
- AI 어시스턴트를 통한 체계적인 개발 프로세스
- 자동화된 코드 생성 및 최적화
- 원클릭 배포 및 디버깅

## 📄 라이선스

MIT License
