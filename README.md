# Limecoding Blog

호기심에서 지식의 연결로 이어지는 개인 기술 블로그입니다.

개발 과정에서 배운 내용과 생각을 기록하고, 관련 글을 따라 탐색하며 다시 찾아볼 수 있는 공간을 만듭니다. 초기에는 글을 편하게 읽고 탐색하는 경험에 집중합니다.

## 현재 상태

Astro 초기 설정과 React·MDX 연동을 마친 단계입니다. 현재 페이지는 기본 시작 화면이며, 글 목록·상세·검색 등 블로그 기능은 아직 구현하지 않았습니다.

콘텐츠 관리 방식과 배포 환경은 검토 중입니다. 문서 그래프와 AI 탐색은 향후 확장 아이디어이며, 초기 출시 범위로 확정되지 않았습니다.

## 기술 구성

- **Astro**: 사이트 구성과 빌드
- **React**: 컴포넌트 연동
- **MDX**: MDX 연동 설정
- **TypeScript**: Astro strict 설정
- **npm**: 의존성과 실행 스크립트 관리

정확한 의존성 버전은 [package.json](package.json)과 `package-lock.json`에서 확인할 수 있습니다.

## 로컬 실행

Node.js `>=22.23.4`와 npm이 필요합니다. 저장소 루트에서 실행합니다.

```sh
npm ci
npm run dev -- --background
```

접속 주소는 개발 서버 로그에서 확인합니다.

```sh
npm run astro -- dev logs
```

### 주요 명령

| 명령 | 설명 |
| --- | --- |
| `npm ci` | lock 파일 기준으로 의존성 설치 |
| `npm run dev -- --background` | 개발 서버를 백그라운드로 실행 |
| `npm run astro -- dev status` | 개발 서버 상태 확인 |
| `npm run astro -- dev logs` | 개발 서버 로그 확인 |
| `npm run astro -- dev stop` | 개발 서버 종료 |
| `npm run build` | 배포용 사이트를 `dist/`에 빌드 |
| `npm run preview` | 빌드 결과를 로컬에서 미리보기 |
| `npm run astro -- --help` | Astro CLI 도움말 확인 |

빌드 결과를 확인하려면 다음 순서로 실행합니다.

```sh
npm run build
npm run preview
```

테스트·린트·포맷 검사 스크립트와 CI는 아직 구성하지 않았습니다.

## 프로젝트 구조

```text
.
├── docs/                 # 컨셉, 기능 범위, 결정 기록
├── public/               # favicon 등 정적 파일
├── src/
│   └── pages/
│       └── index.astro   # 현재 시작 화면
├── astro.config.mjs      # Astro 및 React·MDX 연동 설정
├── tsconfig.json         # TypeScript 설정
├── package.json          # 의존성과 실행 스크립트
├── package-lock.json     # 의존성 잠금 파일
├── CONTRIBUTING.md       # 개발 및 Git 작업 규칙
└── AGENTS.md             # AI 에이전트 작업 지침
```

## 프로젝트 문서

- [컨셉](docs/concept.md): 프로젝트 목적과 서비스 방향
- [기능 범위](docs/features.md): 초기 기능 제안과 향후 확장 구상
- [결정 기록](docs/decisions.md): 확정된 방향과 검토 중인 사항
- [기여 가이드](CONTRIBUTING.md): 커밋·브랜치·PR 규칙과 검증 방법
- [에이전트 지침](AGENTS.md): AI 에이전트의 판단 및 작업 원칙
