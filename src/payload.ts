import {
  faBlogger,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { deprecatedPropType } from '@mui/material'

export const INTRODUCE = {
  name: '최원준(overist)',
  profileImage: '/path/to/your/image.jpg',
  introduction: 'Full Stack Developer',
  socialLinks: [
    {
      icon: faGithub,
      name: 'github.com/overist',
      url: 'https://github.com/overist'
    },
    // {
    //   icon: faLinkedin,
    //   name: 'wonjun-choe',
    //   url: 'https://linkedin.com/in/wonjun-choe/'
    // },
    // {
    //   icon: faBlogger,
    //   name: 'blog.over.ist',
    //   url: 'https://overist.tistory.com'
    // },
    {
      icon: faEnvelope,
      name: 'career@over.ist',
      url: 'mailto:career@over.ist'
    },
    {
      icon: faPhone,
      name: '010-9955-7138',
      url: 'tel:01099557138'
    }
  ],
  tendencies: [
    {
      title: '웹/앱 풀스택 서비스 개발자로서 다양한 환경에 적응합니다.',
      content:
        'Node.js, AWS, MySQL, Git, Linux 등을 활용한 다양한 프로덕션을 설계/배포/운영 해본 경험을 토대로 확장성과 유지보수성을 고려하며 개발합니다. 언어/환경은 도구라고 생각하며 새로운 환경에 적응하고 응용하는 과정을 즐깁니다.'
    },
    {
      title: '읽기 좋은 코드란 무엇인가를 생각하며 개발합니다.',
      content:
        '협업, 생산성과 유지보수성을 고려한 코드를 작성합니다. 정의되지 않은 코드 컨벤션이나 자동화 포인트를 지속적으로 찾고 정의하며 코드 품질을 개선합니다.'
    },
    {
      title: '동료의 의식을 지속적으로 통합합니다.',
      content:
        '커뮤니케이션과 문서화를 기반으로 팀원과 클라이언트에게 주도적으로 의식의 공통화를 이끄는 것을 선호합니다. 권한이 주어질 경우 능동적으로 의견을 제안합니다.'
    }
  ]
}

export const SKILLS = {
  Frontend: [
    { name: 'Next.js', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'MUI', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Intermediate' }
  ],
  Backend: [
    { name: 'NestJS', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'AWS', level: 'Intermediate' },
    { name: 'PHP', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' }
  ],
  Database: [
    { name: 'MySQL', level: 'Advanced' },
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'Redis', level: 'Beginner' },
    { name: 'Elasticsearch', level: 'Beginner' }
  ],
  Etc: [
    { name: 'Git', level: 'Advanced' },
    { name: 'Linux', level: 'Advanced' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Security', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Notion', level: 'Intermediate' },
    { name: 'Jira', level: 'Intermediate' }
  ]
}

export const EXPERIENCE = [
  {
    company: '(주)슈퍼핸드',
    role: '웹 풀스택, 인프라 리드',
    period: '2024-05 ~ 재직 중',
    content: [
      '프로모션으로 급증한 DAU 4000명에 대응하는 AWS 인스턴스 수평확장 및 로드밸런서 구축',
      '지속적인 플랫폼 확장으로 인해 모놀리식 아키텍처를 MSA 아키텍처로 전환',
      '인프라 스케일 아웃으로 인한 통합로깅시스템(Cloudwatch) 구축',
      '게임서버 플레이간 각종 지표 산출을 위한 로그 데이터(400만 건) 쿼리 튜닝',
      '4개 플랫폼간 통합인증서버 구축, 이메일기반 인증에서 소셜인증 증설',
      'Jenkins를 통한 CI/CD 파이프라인 및 블루/그린 배포 인프라 구축',
      '침해사고대응, 인프라단 보안 유지보수(Turnstile, Throttler, WAF)',
      '1~2주 주기 배포 스프린트간의 모바일앱 BE git flow 설계',
      '8개 서비스 네트워크 인프라 관리(AWS, SSL, ACL, CDN, DNS, nginx)',
      'Innopay, Utransfer 연계 환전(출금) 인증프로세스 및 전산 시스템 개발',
      'Innopay, Paypal 연계 결제 전산 시스템 개발',
      'Cloudflare 연계 모바일/웹캠 라이브 스트리밍 송출 서비스 개발',
      '게임 아이템 마켓 플레이스(폐쇄몰) BE, FE 개발',
      '3개 플랫폼간 통합 관리자페이지(Next.js) 개발',
      'AES256, RSA를 활용한 게임 점수 무결성 처리 및 개인정보 암/복호화 처리',
      '사내 각종 유틸 구축 (서버 배포/장애 알림봇, 헬스체커, 로그수집, VPN, 백업)',
      '제로트러스트 보안을 위한 ENV 분리 및 인증/업데이트/관리 서버 구축'
    ],
    skill: [
      'Nest.js',
      'Next.js',
      'MySQL',
      'typeorm',
      'AWS ELB',
      'AWS EC2 (Auto Scaling)',
      'AWS Cloudwatch',
      'ElasticSearch',
      'Jenkins',
      'Cloudflare'
    ]
  },
  {
    company: '(주)타이탄네트웍스',
    role: '웹 풀스택',
    period: '2023-01 ~ 2024-04',
    content: [
      'Nest.js 기반의 웹앱, 배치 설계/개발',
      '쿼리 튜닝을 통한 응답 속도 개선',
      'AWS를 활용한 서버 인프라 구축 및 관리',
      'Next.js 기반의 웹애플리케이션, 관리자페이지 개발',
      'React 기반의 기업 랜딩페이지 기획, 개발',
      'Android Native 앱 개발(Jetpack Compose)',
      'Flutter 기반의 크로스 플랫폼 앱 개발',
      '하도급 업체(개발, 디자인)에게 프로젝트 발주 및 관리'
    ],
    skill: [
      'Nest.js',
      'Next.js',
      'React',
      'AWS',
      'MySQL',
      'Firebase',
      'Android Native',
      'Flutter'
    ]
  },
  {
    company: '개인 프리랜서',
    role: '웹 풀스택',
    period: '2022-03 ~ 2022-12',
    content: ['웹애플리케이션 개발 외주활동으로 수익 창출'],
    skill: ['PHP', 'CodeIgniter', 'WordPress', 'Windows IIS']
  },
  {
    company: '스타트업 R&D',
    role: '코파운더',
    period: '2020-08 ~ 2022-03',
    content: [
      '사업계획서 작성, 초기창업패키지 지원사업 참여',
      '웹애플리케이션 개발 외주활동으로 운영비 창출',
      '블록체인 투자 커뮤니티 기획, 개발, 운영(MAU 약 900명)',
      '국산 애니메이션 테마의 NFT 마켓플레이스 기획, ETH 테스트넷을 활용한 프로토타입 개발'
    ],
    skill: ['PHP', 'gnuboard', 'Django', 'React', 'cafe24']
  }
]

export const PROJECTS = [
  {
    title: '모바일 앱 외부송출 라이브 스트리밍 서비스 개발',
    info: '(주)슈퍼핸드 | 2024-12 ~ 2025-02',
    summary:
      'OBS Studio 등 외부 송출 프로그램에 연결하여 방송할 수 있는 라이브 스트리밍 서비스를 개발하였습니다.',
    links: [
      {
        link: 'https://play.google.com/store/apps/details?id=net.metaskyworld.weecoda',
        title: 'MEET:CODA(AOS)'
      },
      {
        link: 'https://apps.apple.com/jm/app/meet-coda-video-chat/id6475752044',
        title: 'MEET:CODA(iOS)'
      }
    ],
    contents: [
      '1:N 스트리밍 방송을 위한 Cloudflare Stream Live 연계',
      '현금성 재화 후원 기능 개발'
    ]
  },
  {
    title: '400만 로그 테이블 쿼리 튜닝',
    info: '(주)슈퍼핸드 | 2024-09 ~ 2024-10',
    summary: '평균 13초의 응답 속도를 2초 이내로 개선하였습니다.',
    links: [
      {
        title: 'N/A',
        link: ''
      }
    ],
    contents: [
      'Full Scan이 필요한 기획사항이 추가되어 캐싱용도 테이블 확장, 로그 테이블 파티셔닝, 복합 인덱싱 전략 도입',
      '자주 활용되는 Inner Join 접근 전략을 로직 파이프라이닝 전략으로 부하 개선'
    ]
  },
  {
    title: 'METASKY 통합 인증서버 개발',
    info: '(주)슈퍼핸드 | 2024-08 ~ 2024-09',
    summary:
      '1년 이상 라이브중인 리소스 서버를 이용해야 하는 게임 서비스가 신규 출시되어 인증서버를 확장하였습니다.',
    links: [
      {
        title: 'N/A',
        link: ''
      }
    ],
    contents: [
      'Server to Server 통신 프로세스 설계',
      '인증 정책 설계 및 협의',
      'Google/Apple 소셜로그인 기능 추가, 기존 계정(E-mail) 연동 기능 추가',
      '모놀리틱 아키텍처를 MSA 아키텍처로 전환',
      'AWS Loadbalancer, nginx 라우팅 룰을 활용한 API Gateway 및 라우팅 인프라 구축'
    ]
  },

  {
    title: '모놀리틱 서버 MSA 전환',
    info: '(주)슈퍼핸드 | 2024-08 ~ 2024-09',
    summary:
      '사업 이슈로 인해 비정상적으로 잦은 배포 주기가 강제되어 기존의 모놀리틱 통합 서버에 시스템 장애가 빈번히 발생하였습니다. 외부 서버에서 장애 없이 활용 가능하도록 통합 인증 서버, 배치 서버, 리소스 서버를 독립화 처리하였습니다.',
    links: [
      {
        title: 'N/A',
        link: ''
      },
      {
        title: '포트폴리오:인프라',
        link: 'https://overist.notion.site/METASKY-AWS-Infra-Structure-Security-198c57c43eef808d96d7d88f50b1d67b?pvs=4'
      }
    ],
    contents: [
      'AWS ELB를 활용하여 API Gateway 셋업, 블루/그린 배포 셋업',
      '배포시 서버 부하 개선 및 작업 효율을 개선하기 위해 Jenkins CI/CD 자동화 배포 파이프라이닝 셋업'
    ]
  },

  {
    title: '급격한 유저 증가에 따른 인프라 수평확장',
    info: '(주)슈퍼핸드 | 2024-07 ~ 2024-09',
    summary:
      '프로모션으로 인해 DAU가 100명에서 4000명으로 증가함으로 인해 단일 인스턴스로 관리되던 EC2 인스턴스를 Scale out 하였습니다.',
    links: [
      {
        title: 'N/A',
        link: ''
      },
      {
        title: '포트폴리오:인프라',
        link: 'https://overist.notion.site/METASKY-AWS-Infra-Structure-Security-198c57c43eef808d96d7d88f50b1d67b?pvs=4'
      }
    ],
    contents: [
      'AWS Elastic Load Balancing 셋업',
      'AWS EC2 템플릿 셋업, Auto Scale 셋업',
      '인스턴스 확장에 따른 로그 분리로 인해 AWS EC2 Cloudwatch 통합로깅시스템 셋업'
    ]
  },

  {
    title: '팀 내 생산성 향상 업무 지원',
    info: '(주)슈퍼핸드 | 2024-07 ~ 현재',
    summary: 'CI/CD, 인프라, 보안, 사내 유틸 등 개발팀 지원',
    links: [
      {
        title: 'N/A',
        link: ''
      },
      {
        title: '포트폴리오:인프라',
        link: 'https://overist.notion.site/METASKY-AWS-Infra-Structure-Security-198c57c43eef808d96d7d88f50b1d67b?pvs=4'
      }
    ],
    contents: [
      '사내 유틸서버 구축 (VPN, CI/CD, 서버 장애 알림 봇, 헬스 체커, 백업)',
      '코드 컨벤션 정의, 비정상적으로 잦은 모바일 앱 배포주기 간 팀 내 git flow 설계',
      'GitHub 토큰 유출 이슈에 대응하기 위해 env파일 독립화 관리 (ACL제어 및 설정 생성/수정/삭제/다운로드가 가능한 웹 대시보드 개발)'
    ]
  },
  {
    title: '웹 코인 지갑, NFT 마켓, 모바일 앱 리소스 서버 유지보수',
    info: '(주)슈퍼핸드 | 2024-05 ~ 현재',
    summary:
      '비즈니스 로직 장애, 네트워크 장애를 트러블슈팅하며 모니터링 성능을 강화하고 각종 기능을 유지보수 하였습니다.',
    links: [
      {
        title: 'CODA Wallet',
        link: 'https://codawallet.io'
      },
      {
        title: 'METAVIAN',
        link: 'https://metavian8.io'
      },
      {
        link: 'https://play.google.com/store/apps/details?id=net.metaskyworld.weecoda',
        title: 'MEET:CODA(AOS)'
      },
      {
        link: 'https://apps.apple.com/jm/app/meet-coda-video-chat/id6475752044',
        title: 'MEET:CODA(iOS)'
      }
    ],
    contents: [
      '로그 미들웨어 강화, 장애 알림봇을 통한 지속적인 서버 모니터링',
      '인프라 / 네트워크 접근제어 / 방화벽 룰셋 최적화 (AWS, SSL, ACL, CDN, DNS, nginx)',
      'AES256을 활용하여 개인정보 암/복호화 처리, RSA를 활용한 모바일 게임 점수 무결성 처리',
      '잦은 인프라 확장으로 인한 네트워크 장애 트러블슈팅',
      '잦은 기획 수정 및 짧은 배포 주기로 인한 서버 장애 트러블슈팅'
    ]
  },
  {
    title: 'METASKY 통합 관리자 개발 / 유지보수',
    info: '(주)슈퍼핸드 | 2024-05 ~ 현재',
    summary:
      'JSON 입력만으로 DB 매핑 및 관리자 액션 페이지가 생성되도록 솔루션화하여 생산성을 향상시켰습니다.',
    links: [
      {
        title: 'N/A',
        link: ''
      }
    ],
    contents: [
      '분리되어있는 3개 플랫폼 관리자페이지 통합 마이그레이션',
      '다중 관리자 권한 관리',
      '백오피스 통계 업무 지원, 엑셀 다운로드 지원'
    ]
  },

  {
    title: 'METASKY 웹 결제/환전 홈페이지 개발',
    info: '(주)슈퍼핸드 | 2024-05 ~ 2024-12',
    summary:
      'MEET:CODA 앱 유저가 앱을 통해 가입 후 접근할 수 있는 폐쇄몰입니다. 플랫폼 내 재화를 현금/카드로 구매하거나 후원받은 재화를 현금(KRW, USD)으로 출금하는 프로세스를 설계하고 홈페이지를 개발하였습니다.',
    links: [
      {
        title: 'MEET:CODA 대시보드(폐쇄몰)',
        link: 'https://metasky-plus.com/'
      },
      {
        title: '포트폴리오:결제/환전',
        link: 'https://overist.notion.site/MEET-CODA-Demo-19bc57c43eef80bb9ec1e5b7018d0295?pvs=4'
      }
    ],
    contents: [
      '통합 플랫폼 재화 구매 / 아이템 샵 구매 프로세스 전체 설계, 서비스 BE/FE 개발',
      '통합 플랫폼 내 현금성 캐시 출금(환전) 프로세스 전체 설계, 서비스 BE/FE 개발',
      '국내외 PG 결제 연동 (Innopay, Paypal)',
      '원화/외화 외부 송금 API 연동 (Innopay, Utransfer)',
      '관리자페이지 주문상태 관리 및 환불 기능 개발'
    ]
  },
  {
    title: '마일리지 전산 시스템 유지보수',
    info: '(주)타이탄네트웍스 | 2023-08 ~ 2024-05',
    summary:
      '사수와 함께 전산 장애 대응, 데이터 리커버리, 배치 개발, 2000만 데이터 처리를 위한 서버 성능 개선을 담당하였습니다.',
    links: [{ title: 'N/A', link: '' }],
    contents: [
      '출석, 친구초대, 이벤트 등 유저 활동에 따른 마일리지 보상 배치 개발',
      'git을 활용한 유연한 버전 관리 및 엑셀 에비던스를 활용한 데이터 리커버리',
      'DP 알고리즘, BFS 알고리즘을 통해 배치 처리 성능 개선(40분 => 3분)',
      '텔레그램 봇을 활용한 실시간 장애 알림 시스템 설계',
      'typeorm 트랜잭션 제어 유틸 개발 (팬텀리드, 커넥션풀 끊김 이슈 제어)',
      'STAGE 서버구성 후 스냅샷 테스트를 활용하여 데이터 무결성 보장 (고객사와 익스트림 프로그래밍 시행)',
      'GA Action 활용한 사용자 액션 통계 시각화',
      '관리자 페이지 데이터 통계 지표 유지보수',
      'MUI 활용한 사용자 페이지 통계 및 이력 페이지 개발'
    ]
  },
  {
    title: 'METASKY 홈페이지 개발',
    info: '(주)타이탄네트웍스 | 2023-08 ~ 2023-08',
    summary: '가로 스크롤의 인터렉티브 랜딩 페이지를 개발하였습니다.',
    links: [
      {
        title: 'METASKY 홈페이지(유지보수 중단)',
        link: 'https://metaskyworld.net',
        deprecated: true
      },
      {
        title: '포트폴리오:랜딩페이지',
        link: 'https://overist.notion.site/198c57c43eef80d2a73ad7f860683b94'
      }
    ],
    contents: [
      '시니어 UI/UX 디자이너와 협업하여 랜딩 페이지 개발',
      'React, emotion을 활용한 인터렉티브 웹앱 구현'
    ]
  },
  {
    title: '오픈마켓 프론트엔드 개발',
    info: '(주)타이탄네트웍스 | 2023-07 ~ 2023-09',
    summary: 'Next.js 기반 사용자 페이지 개발',
    links: [{ title: 'N/A', link: '' }],
    contents: [
      '팀원 4인 협업을 위한 MUI 디자인 시스템 정의',
      '사용자 주문 및 주문 이력 페이지 개발',
      'Redux-toolkit을 활용한 주문 상태 관리',
      'Redux-persist를 활용한 비로그인 유저 장바구니 상태 유지 및 로그인 시 통합 처리'
    ]
  },
  {
    title: 'NFT 플랫폼 개발',
    info: '(주)타이탄네트웍스 | 2023-04 ~ 2023-08',
    summary:
      '"FTD:For The Dog"의 위치 기반 리워드 보상 앱 Android Native App을 개발하였습니다. 또한 랜딩 페이지를 개발하였습니다.',
    links: [
      {
        title: 'FTD Homepage',
        link: 'https://forthedog.life/'
      },
      {
        title: 'FTD(AOS)(유지보수 중단)',
        link: 'https://forthedog.life/',
        deprecated: true
      }
    ],
    contents: [
      'Hilt ViewModel과 Retrofit2를 활용하여 HTTP 통신 간 세션쿠키 유지 코어(네트워크 인터셉터) 개발',
      'Jetpack Compose를 활용하여 Composable 패턴으로 Android UI 개발(보조)',
      '일러스트 디자이너와 협업하여 React를 활용한 기업 랜딩페이지 개발',
      'CSS로 구현이 어려운 일러스트 기반 벡터 디자인을 SVG 포팅 전략으로 구현',
      'Lighthouse 및 Cloudflare CDN을 활용한 서버 트래픽 최적화'
    ]
  },
  {
    title: '블록체인 서비스 프론트엔드 개발',
    info: '(주)타이탄네트웍스 | 2023-02 ~ 2023-05',
    summary:
      '"Monte Platform"의 웹 지갑을 Next.js 를 활용하여 개발하였습니다. 또한 랜딩 페이지를 기획하고 개발하였습니다.',
    links: [
      { title: 'Monte Platform', link: 'https://monteplatform.org/' },

      {
        title: 'MONDEX(유지보수 중단)',
        link: 'https://monteplatform.org/swap',
        deprecated: true
      }
    ],
    contents: [
      'Next.js를 활용한 SSR 기반 웹앱 개발',
      '시니어 UI/UX 디자이너와 협업하여 UI 구현',
      'React, recoil을 활용하여 스테이킹, 스왑, 코인지갑 UI 개발',
      '고객사 암호화폐 백서를 분석하여 From-scratch 단계부터 랜딩페이지 기획',
      'WordPress 템플릿 및 Elements 플러그인을 활용한 테마 커스터마이징'
    ]
  },
  {
    title: '동아리 홈페이지 개발',
    info: 'SecurityFirst(동아리) | 2020-02 ~ 2020-09',
    summary:
      '4인 팀을 조직하여 XE기반 동아리 홈페이지를 React, express 기반 웹앱으로 마이그레이션 하였습니다.',
    links: [
      {
        title: 'SecurityFirst(회원제 홈페이지)',
        link: 'https://securityfirst.co.kr/'
      }
    ],
    contents: [
      'Figma를 활용하여 디자인',
      'React, redux-thunk, CSS를 활용하여 홈페이지 FE 개발'
    ]
  }
]

export const ETC = {
  Education: {
    content: '순천향대학교 정보보호 학사',
    date: '2016-02 ~ 2022-02'
  },
  Externals: [
    {
      title: '빅딜아이오(코인 커뮤니티) 공동 창업',
      date: '2021-02 ~ 2022-03',
      content:
        '서비스 기획, 커뮤니티 운영, NFT 마켓플레이스 기획 / 프로토타입 개발'
    },
    {
      title: '코딩독(솔루션 창업동아리)',
      date: '2020-08 ~ 2021-02',
      content:
        '초기창업패키지 지원사업(대학 창업동아리 대상) 참여, 서비스 기획, 캐시카우 외주활동'
    },
    {
      title: '대충연합(대전충청 정보보호동아리 연합) 1대 운영진',
      content: '대충콘 학술 세미나 기획/발표',
      date: '2019-02 ~ 2019-12'
    },
    {
      title: '순천향대학교 정보보호학 학술동아리 SecurityFirst 19대 부회장',
      date: '2018-12 ~ 2019-12',
      content:
        '50명 규모 신입회원 교육, 웹 해킹팀 운영, 대외/대내 해킹대회 기획/운영, 각종 동아리 연례행사 운영'
    },
    {
      title: '육군 병장 만기 전역',
      date: '2016-10 ~ 2018-07',
      content: '행정병'
    }
  ],
  Certifications: [],
  Presentations: [
    {
      title: '제17회 전국 청소년 정보보호 페스티벌 웹해킹부문 발표자료',
      contents: [
        'CTF 출제자 write-up',
        '웹해킹 부문 로직취약점, CSRF, XSS, SQL Injection, Web Shell, File Upload 등'
      ],
      link: 'https://github.com/overist/presentation/blob/main/2019-self-web-hacking-challenge-document.md',
      date: '2019-07'
    },
    {
      title: 'XSS Keynote',
      contents: [
        'cross-site scripting (XSS) POC 및 방어 기술 연구',
        '제1회 대충콘 발표자료'
      ],
      link: 'https://github.com/overist/presentation/blob/main/2019-XSS-Keynote-presentation.md',
      date: '2019-07'
    }
  ],
  Articles: [
    {
      title: '정보보호학과 학부생의 컴퓨터공학 공부 방법론',
      link: 'https://overist.tistory.com/1',
      date: '2020-03'
    }
  ],
  Awards: [
    {
      title: '초기창업패키지 지원 동아리 BM 스피치 (서비스 BM 발표)',
      agency: '순천향대학교',
      award: '대상',
      date: '2020-11'
    },
    {
      title: '제17회 전국 청소년 정보보호 페스티벌 해킹 대회 (운영)',
      agency: '한국정보보호산업협회',
      award: '공로상',
      date: '2019-11'
    },
    {
      title: 'FIDO 해커톤 (공유기 인증 표준 펌웨어 커스텀)',
      agency: 'FIDO Alliance',
      award: 'Moonshot Awards',
      date: '2019-11'
    },
    {
      title: 'SHADOW CTF (해킹대회)',
      agency: '수원대학교',
      award: '최우수상',
      date: '2019-11'
    },
    {
      title: '공과대학 학술제 (CTF CMS 제작)',
      agency: '순천향대학교 공과대학',
      award: '동상',
      date: '2018-11'
    }
  ]
}
