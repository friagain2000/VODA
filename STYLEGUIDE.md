## 폰트 CDN
- 지마켓산스: `<link href="https://fonts.cdnfonts.com/css/gmarket-sans" rel="stylesheet">`
- Pretendard: `<script src="https://cdn.jsdelivr.net/npm/pretendard-std@1.3.9/subset.min.js"></script>`

## 디자인 토큰 (json/ 폴더)

| 파일 | 내용 |
|------|------|
| `tokens.color.json` | Primary(보라) · Secondary(핑크) · Neutral(회색) 팔레트 |
| `tokens.typography.json` | font-family · size · weight · line-height · letter-spacing |
| `tokens.spacing.json` | spacing 스케일 (4px 단위) |
| `tokens.radius.json` | border-radius (none~full) |
| `tokens.shadow.json` | box-shadow (none~2xl, inner) |
| `tokens.opacity-blur-border.json` | opacity · blur · border-width |

## Tailwind @theme 토큰 (index.css 적용 완료)

```css
/* 컬러 */
--color-primary-{50~950}    /* 보라 계열 */
--color-secondary-{50~950}  /* 핑크 계열 */
--color-neutral-{50~950}    /* 회색 계열 */

/* 폰트 */
--font-sans   /* Gmarket Sans TTF */
--font-serif  /* Pretendard */
```

## Figma 변수
https://www.figma.com/design/1njHE0wh4wagalawjHyLSo/VODA?node-id=1-2&view=variables
