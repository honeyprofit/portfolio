$(document).ready(function() {
    let projectData = {
        younghyunkim: {
            image1: 'images/younghyunkim/title.png',
            image2: 'images/younghyunkim/figma.png',
            image3: 'images/younghyunkim/designsystem01.png',
            image4: 'images/younghyunkim/designsystem02.png',
            image5: 'images/younghyunkim/screenpreview.png',
            title: 'Younghyun Kim Portfolio',
            description: '이 프로젝트는 제 포트폴리오 사이트입니다. 다크 모드와 라이트 모드를 성공적으로 사용하였습니다. SVG 로고를 활용하여 이미지 수를 줄이고 코드를 간결하게 유지하였으며, 여러 프로젝트를 효율적으로 동일한 형식으로 표현하기 위해 데이터를 객체 형식으로 저장하고, 이를 projectID를 통해 접근하는 방식을 사용했습니다.',
            role: '프로젝트 기획, UI/UX 디자인, 코딩',
            year: '2024',
            type: 'Planning UI/UX Web development',
            sourcecode: 'View on GitHub',
            link_git: 'https://github.com/honeyprofit/portfolio',
            final: 'Website',
            link: 'https://honeyprofit.github.io/portfolio/',
            challenge: `도전 과제는 다크 모드와 라이트 모드를 구현하면서 코드를 최대한 간결하게 유지하는 것이었습니다.`,
            approach: `다음과 같은 접근 방식으로 사이트를 개발하였습니다:
                <br>1. 다크 모드와 라이트 모드 구현을 위한 코드 효율성 강화
                <br>2. SVG 로고 사용을 통한 이미지 파일 최소화 및 코드 청결성 유지
                <br>3. 데이터를 객체 형식으로 저장하고, 이를 projectID를 통해 접근하는 방식을 사용하여 프로젝트 효율적 표현`,
            process: `기획 단계: 사용자 요구사항 분석, 기술 조사
                <br>디자인 단계: Figma를 활용한 프로토타입 제작, UI/UX 디자인
                <br>개발 단계: HTML, CSS, JavaScript를 사용한 웹사이트 구현`,
            tool: `디자인 도구: Figma
                <br>개발 도구: HTML, CSS, JavaScript`,
            result: `코드 간결성과 사용자 친화적 UI/UX를 강조한 포트폴리오 사이트를 성공적으로 완성했습니다.
                <br>여러 프로젝트를 효율적으로 표현하면서도 코드의 명확성을 유지하였습니다.`,
            learning: `포트폴리오 사이트 개발을 통해 실용적인 UI/UX 디자인과 웹 개발 능력을 크게 향상시킬 수 있었습니다.
                <br>다양한 프로젝트를 효과적으로 관리하고 전시하는 방법을 배울 수 있었습니다.`,
            conclusion: `Younghyun Kim 포트폴리오 사이트는 제 개인 브랜딩을 강화하고 포트폴리오 작품을 효과적으로 전시할 수 있는 중요한 도구가 되었습니다.
                <br>향후에도 지속적인 개선과 사용자 피드백을 반영하여 더 나은 결과물을 만들어 나갈 계획입니다.`,
        },
        binance: {
            image1: 'images/binance/binance_title.png',
            image2: 'images/binance/binance_figma.png',
            image3: 'images/binance/binance_colorpalette.png',
            image4: 'images/binance/binance_component.png',
            image5: 'images/binance/binance_mockup.mp4',
            title: 'binance 3D',
            description: 'Figma에서 설계한 2D UI 디자인을 Spline을 사용해 3D로 변환하고, CodeSandbox에서 React 사이트를 개발한 프로젝트입니다.',
            role: 'UI 디자인, 3D 모델링, 및 코딩',
            year: '2024',
            type: 'Web development',
            sourcecode: 'View on GitHub',
            link_git: 'https://github.com/honeyprofit/binance3d-2',
            final: 'Website',
            link: 'https://lfh3tt-5173.csb.app/',
            challenge: `
            2D 이미지를 3D로 변환하는 과정에서 다음과 같은 도전 과제가 있었습니다.
            <br>1. 2D 디자인 요소를 3D로 전환하면서 UI의 일관성을 유지하는 것.
            <br>2. 3D 모델의 복잡성으로 인해 로딩 시간을 최소화하고 성능을 최적화하는 것.
            <br>3. 다양한 디바이스와 브라우저에서 일관된 사용자 경험을 제공하는 것.`,
            approach: `
            프로젝트는 다음과 같은 접근 방식을 통해 진행되었습니다.
            <br>1. 기존 Binance 사이트를 분석하고 주요 기능을 재배치했습니다.
            <br>2. 주요 색상인 F0B90B와 181A20를 사용해 브랜드 아이덴티티를 유지하면서도 모던한 느낌의 디자인을 구현했습니다.
            <br>3. Figma를 통해 2D UI 디자인을 작성한 후, Spline을 사용해 이를 3D로 변환했습니다.
            <br>4. CodeSandbox를 활용해 React로 반응형 웹사이트를 개발하고, 다양한 디바이스에서 테스트하며 최적화를 진행했습니다.`,
            process: `
            프로젝트 진행 과정은 다음과 같습니다.
            <br>1. 기획 단계: 사용자 요구사항 분석 및 사이트 구조 설계
            <br>2. 디자인 단계: Figma를 활용한 2D UI 디자인 제작
            <br>3. 변환 단계: Spline을 사용해 2D 디자인을 3D 모델로 변환
            <br>4. 개발 단계: CodeSandbox에서 React를 사용해 웹사이트 개발
            <br>5. 테스트 단계: 다양한 디바이스와 브라우저에서 테스트 및 디버깅
            <br>6. 배포 단계: 최종 웹사이트를 Github를 통해 배포하고 사용자 피드백을 반영해 최종 수정`,
            tool: `
            프로젝트에서 사용된 도구는 다음과 같습니다.
            <br>디자인 도구: Figma (UI/UX 디자인)
            <br>3D 도구: Spline (3D 변환)
            <br>개발 도구: CodeSandbox (React 개발)`,
            result: `
            프로젝트의 주요 결과는 다음과 같습니다.
            <br>3D 요소를 통합하면서 발생할 수 있는 다양한 문제를 체험하고 해결함으로써 기술적 숙련도를 높였습니다.
            <br>앵글, hover 상황 등을 최적화하여 사용자 편의를 극대화한 결과물을 도출했습니다.`,
            learning: `
            이 프로젝트를 통해 다음 기술을 습득했습니다.
            <br>1. 2D UI 디자인을 3D로 자연스럽게 변환하는 방법
            <br>2. React를 활용한 최신 웹 기술을 통해 반응형 웹사이트를 개발하는 기술
            <br>3. 3D 요소가 포함된 웹사이트의 성능 최적화 방법
            <br>4. 사용자 피드백을 반영해 디자인과 기능을 개선하는 과정의 중요성`,
            conclusion: `
            Binance 3D 프로젝트는 개인적으로 3D 모델링과 React 프로그래밍에 대한 전문성을 향상시키는 계기가 되었습니다.
            <br>이 프로젝트를 통해 얻은 경험과 지식을 바탕으로, 향후 더욱 정교하고 사용자 중심적인 웹사이트를 개발할 수 있는 역량을 갖추게 되었습니다.
            <br>또한, 사용자 중심의 디자인과 개발이 프로젝트의 성공에 얼마나 중요한지 재확인할 수 있었습니다.`,
        },
        paddington: {
            image1: 'images/paddington/paddington_title.png',
            image2: 'images/paddington/paddington_figma.png',
            image3: 'images/paddington/paddington_typography.png',
            image4: 'images/paddington/paddington_colorpalette.png',
            image5: 'images/paddington/paddington_mockup.png',
            title: 'Paddington',
            description: 'Paddington Bear 웹사이트는 유명한 캐릭터 Paddington Bear를 주제로 관련 정보를 제공하는 사이트입니다. 이 프로젝트는 사용자 친화적인 인터페이스와 매력적인 디자인을 통해 팬들에게 정보를 제공하고, 커뮤니티를 형성하는 것을 목표로 합니다.',
            role: 'Planning, UI/UX, Frontend development',
            year: '2024',
            type: 'Web development',
            sourcecode: 'View on GitHub',
            link_git: 'https://github.com/honeyprofit/paddington',
            final: 'Website',
            link: 'http://paddingtonbeta.dothome.co.kr/paddington',
            challenge: `
            이 프로젝트에서 가장 큰 도전 과제는 다음과 같았습니다.
            <br>1. Paddington Bear의 특성을 잘 반영하면서도 현대적인 디자인을 구현하는 것.
            <br>2. 다양한 디바이스에서 일관된 사용자 경험을 제공하는 반응형 웹사이트를 개발하는 것.
            <br>3. 사용자들이 쉽게 탐색하고 정보를 얻을 수 있도록 직관적인 UI/UX를 설계하는 것.
            <br> The biggest challenge in this project was:
            <br>1. Implementing a modern design while still reflecting the characteristics of Paddington Bear.
            <br>2. Developing responsive websites that provide a consistent user experience across various devices.
            <br>3. Designing intuitive UI/UX so that users can easily navigate and obtain information.`,
            approach: `프로젝트는 다음과 같은 접근 방식을 통해 진행되었습니다.
            <br>초기 기획 단계에서 Paddington Bear의 브랜드 가치를 분석하고, 타겟 사용자 그룹을 정의하였습니다.
            <br>Figma를 사용하여 UI/UX 디자인을 시각화하였습니다.
            <br>HTML, CSS, jQuery를 사용하여 웹사이트를 코딩하고, 다양한 디바이스에서 테스트를 통해 반응형 디자인을 최적화하였습니다.`,
            process: `기획 단계: 브랜드 분석, 타겟 사용자 정의, 콘텐츠 구조 기획
            <br>디자인 단계: Figma를 통한 와이어프레임 및 프로토타입 제작, UI/UX 디자인
            <br>개발 단계: HTML, CSS, jQuery를 사용한 코딩, 반응형 디자인 구현
            <br>테스트 단계: 다양한 디바이스에서의 테스트 및 디버깅, 사용자 피드백 반영
            <br>Planning stage: Brand analysis, target customization, content structure planning 
            <br>Design stage: Wireframe and prototype production using Figma, UI/UX design 
            <br>Development stage: Coding using HTML, CSS, jQuery, Responsive design implementation 
            <br>Testing phase: testing and debugging on various devices, reflecting user feedback`,
            tool: `기획 및 디자인: Figma, Adobe Photoshop
            <br>개발: HTML, CSS, jQuery
            <br>테스트: BrowserStack 등 다양한 브라우저 및 디바이스 테스트 도구`,
            result: `사용자가 쉽게 탐색할 수 있는 직관적인 인터페이스를 갖춘 웹사이트 구현
            다양한 디바이스에서 일관된 사용자 경험 제공
            Paddington Bear의 특성을 잘 반영한 매력적인 디자인`,
            learning: `브랜드 가치를 웹사이트 디자인에 반영하는 방법
            Figma를 활용한 효과적인 UI/UX 디자인 프로세스
            HTML, CSS, jQuery를 사용한 반응형 웹사이트 개발 기술`,
            conclusion: `Paddington Bear 웹사이트 프로젝트는 디자인과 개발의 전 과정을 경험할 수 있는 값진 기회였습니다. 이번 프로젝트를 통해 사용자 중심의 디자인과 반응형 웹사이트 개발의 중요성을 다시 한 번 깨달았으며, 앞으로의 프로젝트에서도 이 경험을 바탕으로 더 나은 결과물을 만들어낼 수 있을 것입니다.`,
        },
        sprout: {
            image1: 'images/sprout/sprout_title.png',
            image2: 'images/sprout/sprout_figma.jpg',
            image3: 'images/sprout/sprout_typography.png',
            image4: 'images/sprout/sprout_colorpalette_1.png',
            image5: 'images/sprout/sprout_mockup.png',
            title: 'Sprout',
            description: 'Sprout는 초보자부터 전문가까지 식물 애호가들이 필요한 정보를 제공하여 식물을 키울 수 있게 해줍니다. 날씨를 확인하고, 스캔을 통해 식물 정보를 확인하고 일광량을 측정할 수 있으며, 다양한 식물 성장 일정을 캘린더에 저장할 수도 있습니다.',
            role: '프로젝트 기획 및 UI/UX 디자인',
            year: '2024',
            type: 'App Design',
            sourcecode: 'See Prototype',
            link_git: 'https://www.figma.com/proto/vl0fGqfROkcSUjbi1sllPN/1%EC%B0%A8-%EC%8B%9C%EC%95%88?page-id=278%3A5499&node-id=328-5876&viewport=7455%2C1449%2C0.27&t=0lfGM5dBR8JBxbGW-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=328%3A5876',
            final: 'Website',
            link: 'https://gray-nonogon-396482.framer.app/',
            challenge: `이 앱의 네비게이션 메뉴를 구성하는 것이 매우 도전적이었습니다.
                <br>1. 여섯 개의 메뉴를 60도 간격으로 배치했습니다.
                <br>2. 전체 네비게이션 메뉴 본체를 60도 회전시켰을 때, 각 메뉴는 -60도로 반대로 회전하여 텍스트가 기울어지지 않도록 했습니다.`,
            approach: `이 프로젝트는 다음과 같은 접근 방식으로 진행되었습니다:
                <br>1. 사용자 조사를 통해 목표 사용자를 정의하고 요구사항을 도출했습니다.
                <br>2. Figma를 사용하여 UI/UX 디자인을 시각화했습니다.
                <br>3. 사용자 피드백을 반영하여 디자인을 반복적으로 개선했습니다.
                <br>4. 디자인 단계에서 사용성을 고려하여 테스트 및 검토 과정을 거쳤습니다.`,
            process: `기획 단계: 사용자 조사, 요구사항 정의
                <br>디자인 단계: 와이어프레임 및 프로토타입 제작, Figma를 사용한 UI/UX 디자인
                <br>개발 단계: 피그마 프로토타입 구현
                <br>테스트 단계: 사용자 테스트 및 피드백 반영`,
            tool: `디자인 도구: Figma, Adobe Photoshop
                <br>프로토타입 도구: Figma`,
            result: `사용자가 쉽게 탐색할 수 있는 직관적인 인터페이스를 구현했습니다.
                <br>일관된 사용자 경험 제공
                <br>식물 애호가들을 위한 매력적인 디자인 구현`,
            learning: `사용자 중심의 디자인 원칙을 이해하고 적용하는 방법
                <br>Figma를 활용한 효과적인 UI/UX 디자인 프로세스
                <br>사용자 피드백을 디자인에 반영하는 기술`,
            conclusion: `Sprout App 프로젝트는 디자인 및 프로토타이핑 과정에서 중요한 교훈을 제공했습니다. 이 프로젝트를 통해 사용자 중심 디자인과 반복적인 피드백 반영의 중요성을 다시 한 번 깨달았으며, 이를 바탕으로 향후 프로젝트에서도 더 나은 결과를 창출할 수 있을 것입니다.`,
        },
        greenenergy: {
            image1: 'images/greenenergy/greenenergy_title.png',
            image2: 'images/greenenergy/greenenergy_figma.jpg',
            image3: 'images/greenenergy/greenenergy_design01.jpg',
            image4: 'images/greenenergy/greenenergy_design02.jpg',
            image5: 'images/greenenergy/greenenergy_code.png',
            title: 'Green Energy',
            type: 'Web design Web developement',
            sourcecode: 'View on GitHub',
            link_git: 'https://github.com/honeyprofit/greenenergy',
            final: 'Website',
            link: 'http://paddingtonbeta.dothome.co.kr/greenenergy', 
            challenge: `이 프로젝트의 가장 큰 도전 과제는:
                <br>1. 태양광 및 풍력 발전소의 복잡한 설계와 시뮬레이션을 구현하는 것이었습니다.
                <br>2. 다양한 환경 조건에서의 성능 최적화와 효율성 분석을 실시하는 것이었습니다.`,
            approach: `이 프로젝트는 다음과 같은 접근 방식으로 진행되었습니다:
                <br>1. 태양광 및 풍력 발전 기술의 최신 동향과 요구 사항을 분석했습니다.
                <br>2. 웹사이트의 UI/UX 디자인과 사용자 피드백을 반영하여 프로토타입을 제작했습니다.
                <br>3. HTML, CSS, JavaScript를 사용하여 반응형 웹사이트를 개발하고, 서버 측 코드를 구현했습니다.`,
            process: `기획 단계: 요구사항 분석, 기술 조사
                <br>디자인 단계: 프로토타입 제작, UI/UX 디자인
                <br>개발 단계: HTML, CSS, JavaScript를 사용한 웹사이트 개발
                <br>테스트 단계: 사용자 테스트 및 피드백 반영`,
            tool: `디자인 도구: Figma, Adobe Illustrator
                <br>개발 도구: HTML, CSS, JavaScript`,
            result: `사용자가 쉽게 이해하고 활용할 수 있는 정보 제공을 목표로 하여 웹사이트를 구현했습니다.
                <br>친환경 에너지 소개와 관련된 다양한 측면에서 정보를 제공하고자 했습니다.`,
            learning: `환경 문제와 친환경 기술에 대한 심층적인 이해를 도모할 수 있는 기회였습니다.
                <br>웹 개발 및 디자인에서의 실질적인 경험을 쌓을 수 있었습니다.`,
            conclusion: `Green Energy 프로젝트는 환경 보호와 지속 가능한 발전에 대한 인식을 높이고자 하는 목적을 달성하기 위한 중요한 시작점이었습니다. 
                <br>앞으로도 더 나은 정보 전달과 사용자 경험을 위해 지속적으로 개선해 나갈 계획입니다.`,
        }, 
        museum: {
            image1: 'images/museum/museum_title.png',
            image2: 'images/museum/museum_figma.png',
            image3: 'images/museum/museum_typography.png',
            image4: 'images/museum/museum_colorpalette.png',
            image5: 'images/museum/museum_mockup.png',
            title: 'National Museum of Korea',
            description: 'National Museum of Korea 앱은 사용자가 국립 박물관을 탐색하고 전시 정보를 얻을 수 있도록 도와줍니다. 이 프로젝트는 역사와 문화적 중요성을 고려하여 시각적 요소를 디자인하고, 사용자가 쉽게 탐색할 수 있는 직관적인 UI/UX를 제공하는 것을 목표로 합니다.',
            role: 'UI/UX 디자인 및 프로토타이핑',
            year: '2024',
            type: 'App Design',
            sourcecode: 'See Binance',
            link_git: 'https://github.com/honeyprofit',
            final: 'Prototype',
            link: 'https://www.figma.com/proto/ioPjPfGuwetSTARxBrm5Wx/National-gallery?page-id=21%3A303&node-id=21-307&viewport=412%2C445%2C0.46&t=98OrabDkqvhcrAws-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=21%3A307',
            challenge: `이 앱의 디자인에서 중요한 도전 과제는 다음과 같았습니다:
                <br>1. 국립 박물관의 문화적, 역사적 중요성을 반영하는 디자인 구현.
                <br>2. 다양한 전시 정보와 콘텐츠를 직관적으로 배치하는 것.
                <br>3. 사용자가 쉽게 탐색할 수 있도록 반응형 디자인을 최적화하는 것.`,
            approach: `이 프로젝트는 다음과 같은 접근 방식으로 진행되었습니다:
                <br>1. 사용자 조사를 통해 목표 사용자를 정의하고 요구사항을 도출했습니다.
                <br>2. Figma를 사용하여 UI/UX 디자인을 시각화했습니다.
                <br>3. 역사적, 문화적 요소를 반영하여 디자인을 개선했습니다.
                <br>4. 사용자 피드백을 반영하여 디자인을 반복적으로 개선했습니다.`,
            process: `기획 단계: 사용자 조사, 요구사항 정의
                <br>디자인 단계: 와이어프레임 및 프로토타입 제작, Figma를 사용한 UI/UX 디자인
                <br>개발 단계: 피그마 프로토타입 구현
                <br>테스트 단계: 사용자 테스트 및 피드백 반영`,
            tool: `디자인 도구: Figma, Adobe Photoshop
                <br>프로토타입 도구: Figma`,
            result: `사용자가 쉽게 탐색할 수 있는 직관적인 인터페이스를 구현했습니다.
                <br>문화적, 역사적 중요성을 반영한 매력적인 디자인 구현`,
            learning: `문화적, 역사적 요소를 UI/UX 디자인에 반영하는 방법
                <br>Figma를 활용한 효과적인 UI/UX 디자인 프로세스
                <br>사용자 피드백을 디자인에 반영하는 기술`,
            conclusion: `National Museum of Korea 앱 프로젝트는 문화적, 역사적 중요성을 반영한 디자인과 프로토타이핑 과정에서 중요한 교훈을 제공했습니다. 이 프로젝트를 통해 사용자 중심 디자인과 반복적인 피드백 반영의 중요성을 다시 한 번 깨달았으며, 이를 바탕으로 향후 프로젝트에서도 더 나은 결과를 창출할 수 있을 것입니다.`,
        },
    };

    // URL에서 프로젝트 ID를 가져와서 데이터를 업데이트
    let urlParams = new URLSearchParams(window.location.search);
    let projectID = urlParams.get('project');

    if (projectData.hasOwnProperty(projectID)) {
        $('#project-image1').attr('src', projectData[projectID].image1);
        $('#project-image2').attr('src', projectData[projectID].image2);
        $('#project-image3').attr('src', projectData[projectID].image3);
        $('#project-image4').attr('src', projectData[projectID].image4);
        $('#project-title').text(projectData[projectID].title);
        $('#project-description').text(projectData[projectID].description);
        $('#summary-role').text(projectData[projectID].role);
        $('#summary-year').text(projectData[projectID].year);
        $('#summary-type').text(projectData[projectID].type);
        $('#summary-source a').text(projectData[projectID].sourcecode);
        $('#summary-source a').attr('href', projectData[projectID].link_git);        
        $('#summary-final a').text(projectData[projectID].final);
        $('#summary-final a, #stamp_preview').attr('href', projectData[projectID].link);
        $('#project-challenge').html(projectData[projectID].challenge);
        $('#project-approach').html(projectData[projectID].approach);
        $('#project-process').html(projectData[projectID].process);
        $('#project-tool').html(projectData[projectID].tool);
        $('#project-result').html(projectData[projectID].result);
        $('#project-learning').html(projectData[projectID].learning);
        $('#project-conclusion').html(projectData[projectID].conclusion);

    // Conditionally add the video element
    if (projectID === 'binance') {
        $('#project-media').html(`
            <video autoplay loop muted playsinline>
                <source src="images/binance/binance_mockup.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `);
    } else {
        $('#project-image5').attr('src', projectData[projectID].image5);
    }

    } else {
        console.error('Project data not found for ID:', projectID);
        $('#project-title').text('Project Not Found');
        $('#project-description').text('The requested project does not exist.');
    }
});
