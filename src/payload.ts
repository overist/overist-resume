import {
  faBlogger,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
    }
  ],
  tendencies: [
    {
      title: '웹/앱 풀스택 서비스 개발자로서 다양한 환경에 적응합니다.',
      content:
        'Node.js, AWS, MySQL, Git, Linux 등을 활용한 프로덕션을 설계/배포/운영 해본 경험을 토대로 확장성과 유지보수성을 고려하며 개발합니다. 언어/환경은 도구라고 생각하며 새로운 환경에 적응하는 과정을 즐깁니다.'
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
    { name: 'Security', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Notion', level: 'Intermediate' },
    { name: 'Jira', level: 'Intermediate' }
  ]
}

export const EXPERIENCE = [
  {
    company: '(주)슈퍼핸드',
    role: 'BE Lead Developer',
    period: '2024-05 ~ 재직 중',
    content: [
      '프로모션으로 급증한 DAU 4000명에 대응하는 AWS 인스턴스 수평확장 및 로드밸런서 구축',
      '지속적인 플랫폼 확장으로 인해 모놀리식 아키텍처 => MSA 아키텍처 전환',
      '인프라 스케일 아웃으로 인한 통합로깅시스템(Cloudwatch) 구축',
      '게임서버 플레이간 각종 지표 산출을 위한 로그 데이터(400만 건) 쿼리 튜닝',
      '4개 플랫폼간 통합인증서버 구축, 이메일기반 인증 => 소셜인증 증설',
      'Jenkins를 통한 CI/CD 파이프라인 및 블루/그린 배포 인프라 구축',
      '인프라단 보안 유지보수 및 모니터링 (Turnstile, Throttler, WAF)',
      '시스템 해킹시도(보안사고x) 공격자 행위분석 및 침해사고 대응',
      '2~3주 주기 배포 스프린트간의 모바일앱 BE git flow 설계',
      '8개 서비스 인프라 관리(AWS, SSL, ACL, CDN, DNS, nginx)',
      'Innopay, Utransfer 연계 환전(출금) 인증프로세스 및 전산 시스템 개발',
      'Innopay, Paypal 연계 결제 전산 시스템 개발',
      'Cloudflare 연계 모바일/웹캠 라이브 스트리밍 송출 서비스 개발',
      '게임 아이템 마켓 플레이스(폐쇄몰) BE, FE 개발',
      '3개 플랫폼간 통합 관리자페이지(Next.js) 개발',
      'AES256, RSA를 활용한 게임 점수 무결성 처리 및 개인정보 암/복호화 처리',
      '사내 각종 유틸서버 구축 (서버 배포/장애 알림봇, 헬스체커, 로그수집, VPN, 백업)',
      '제로트러스트 보안을 위한 ENV 분리 및 인증/업데이트/관리 서버 구축',
      'ElasticSearch를 활용한 로그수집 및 데이터 지표 추출'
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
    role: 'Web Full Stack Developer',
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
    role: 'Web Full Stack Developer',
    period: '2022-03 ~ 2022-12',
    content: ['웹애플리케이션 개발 외주활동으로 수익 창출'],
    skill: ['PHP', 'CodeIgniter', 'WordPress', 'Windows IIS']
  },
  {
    company: '스타트업 R&D',
    role: 'Co-Founder',
    period: '2020-09 ~ 2022-03',
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
    name: 'Project Name',
    description: 'A brief description of the project.',
    link: 'https://project-link.com'
  }
  // Add more projects
]

export const ETC = {
  Education: ['University Name, Degree, Graduation Year'],
  Certifications: ['Certification Name, Issuing Organization, Year'],
  Awards: ['Award Name, Issuing Organization, Year'],
  Presentations: ['Presentation Title, Event, Date'],
  BlogPosts: ['Blog Post Title, URL']
}
