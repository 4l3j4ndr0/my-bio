# 🚀 BIO Platform - Personal Biography & Portfolio Builder

![AWS Diagram](public/AwsDiagram.png)

<div align="center">

![BIO Platform](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9f74dqx4t3vim61ckopf.png)

[![AWS Amplify](https://img.shields.io/badge/AWS-Amplify-FF9900?style=for-the-badge&logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![Quasar](https://img.shields.io/badge/Quasar-16B7FB?style=for-the-badge&logo=quasar&logoColor=white)](https://quasar.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![AWS CDK](https://img.shields.io/badge/AWS-CDK-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/cdk/)

_Create stunning personal biography websites with professional portfolios, social media integration, and Credly certifications showcase_

• [📖 Documentation](#documentation) • [🚀 Quick Start](#quick-start) • [🤝 Contributing](#contributing)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Installation](#️-installation)
- [⚙️ Configuration](#️-configuration)
- [🎨 Customization](#-customization)
- [📱 Usage](#-usage)
- [🔧 Development](#-development)
- [🚀 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [📚 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🎯 Core Functionality

- **🎨 Dynamic Personal Profiles**: Create beautiful, responsive biography pages with custom themes
- **🌐 Custom Subdomains**: Each user gets their own subdomain (e.g., `yourname.bio.awslearn.cloud`)
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎭 Interactive Animations**: Particle.js animations with customizable colors and effects

### 🔗 Social Media Integration

- **📲 Multi-Platform Support**: LinkedIn, GitHub, Medium, Facebook, Instagram, YouTube, Twitter/X
- **🔗 Smart URL Validation**: Automatic validation of social media URLs
- **👁️ Visibility Controls**: Show/hide specific social networks on your profile
- **🎯 One-Click Redirects**: Direct links to all your social platforms

### 🏆 Professional Certifications

- **🎓 Credly Integration**: Automatic fetching and display of Credly badges
- **🔄 Real-time Updates**: Sync your latest certifications automatically
- **🖼️ Visual Badge Display**: Professional badge showcase with click-to-verify functionality
- **📊 Certification Management**: Easy management of multiple certification providers

### 🔐 Authentication & Security

- **🔒 AWS Cognito Integration**: Secure user authentication and authorization
- **👤 User Management**: Complete user profile management system
- **🛡️ Role-based Access**: Secure API endpoints with proper authorization
- **🔑 Session Management**: Automatic token refresh and session handling

### 🎨 Customization Options

- **🌈 Color Themes**: Custom color picker for personalized branding
- **📸 Image Upload**: Secure image storage with AWS S3 integration
- **✏️ Rich Text Editing**: Comprehensive biography and description editing
- **🎯 SEO Optimization**: Meta tags, Open Graph, and Twitter Card support

---

## 🏗️ Architecture

### Frontend Stack

```
Vue.js 3 (Composition API) + TypeScript
├── 🖼️ Quasar Framework (UI Components)
├── 🗂️ Pinia (State Management)
├── 🛣️ Vue Router (Navigation)
├── 🎨 Particle.js (Animations)
└── 📱 Responsive Design (Mobile-First)
```

### Backend Infrastructure (AWS)

```
AWS Amplify Fullstack
├── 🔐 Amazon Cognito (Authentication)
├── 🗄️ Amazon DynamoDB (Database)
├── 📦 Amazon S3 (File Storage)
├── ⚡ AWS Lambda (Serverless Functions)
├── 🌐 Amazon API Gateway (REST API)
└── 🚀 AWS CDK (Infrastructure as Code)
```

### Key Components Architecture

```
src/
├── 📄 pages/
│   ├── IndexPage.vue          # Admin dashboard for profile editing
│   ├── IndexUsersPage.vue     # Public profile display
│   └── Login.vue              # Authentication page
├── 🧩 components/
│   └── BioComponent.vue       # Main profile display component
├── 🗂️ stores/
│   ├── User.ts                # User authentication state
│   └── General.ts             # Application data management
├── 🛣️ router/
│   ├── routes.ts              # Admin routes
│   └── routesUser.ts          # Public profile routes
└── 🔧 amplify/
    ├── backend.ts             # AWS infrastructure definition
    ├── data/resource.ts       # Database schema
    └── functions/             # Lambda functions
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or 20+
- **npm** 6.13.4+
- **AWS Account** with appropriate permissions
- **AWS CLI** configured (optional but recommended)

### 1-Minute Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/bio-platform.git
cd bio-platform

# Install dependencies
npm install

# Start development server
npm run dev

# In another terminal, start AWS Amplify sandbox
npx ampx sandbox
```

🎉 **That's it!** Your BIO Platform is now running at `http://localhost:9000`

---

## 🛠️ Installation

### Detailed Installation Steps

1. **Clone and Setup**

   ```bash
   git clone https://github.com/yourusername/bio-platform.git
   cd bio-platform
   npm install
   ```

2. **AWS Configuration**

   ```bash
   # Configure AWS credentials (if not already done)
   aws configure

   # Or use AWS profiles
   npx ampx sandbox --profile your-aws-profile
   ```

3. **Environment Setup**

   ```bash
   # Copy environment template
   cp .env.example .env.local

   # Edit your environment variables
   nano .env.local
   ```

4. **Database Initialization**

   ```bash
   # Deploy AWS resources
   npx ampx sandbox

   # The database schema will be automatically created
   ```

---

## ⚙️ Configuration

### Environment Variables

```env
# AWS Configuration
VITE_AWS_REGION=us-east-1
VITE_AWS_USER_POOL_ID=your-user-pool-id
VITE_AWS_USER_POOL_CLIENT_ID=your-client-id

# Application Settings
VITE_APP_NAME=BIO Platform
VITE_BASE_DOMAIN=bio.awslearn.cloud
```

### Quasar Configuration

The application uses Quasar Framework with the following key configurations:

```javascript
// quasar.config.js highlights
framework: {
  plugins: ['Notify', 'Loading', 'Dialog', 'LocalStorage', 'Meta'],
  config: {
    brand: {
      primary: '#402d6b',
      secondary: '#26a653'
    }
  }
}
```

### AWS Amplify Configuration

```typescript
// amplify/backend.ts
const backend = defineBackend({
  auth, // Cognito User Pools
  data, // DynamoDB with GraphQL
  storage, // S3 Bucket
  CredlyBadgesFunction, // Lambda for Credly API
});
```

---

## 🎨 Customization

### Theme Customization

```typescript
// Custom color themes
const customTheme = {
  primary: "#402d6b",
  secondary: "#26a653",
  accent: "#9C27B0",
  dark: "#1d1d1d",
  positive: "#21BA45",
  negative: "#C10015",
};
```

### Component Customization

```vue
<!-- Custom BioComponent styling -->
<template>
  <q-page class="flex flex-center">
    <div id="particles-js" :style="particlesStyle"></div>
    <!-- Your custom content -->
  </q-page>
</template>
```

### Adding New Social Networks

```typescript
// In stores/General.ts
const newSocialNetwork = {
  icon: "fab fa-your-platform",
  url: "",
  name: "Your Platform",
  show: false,
};
```

---

## 📱 Usage

### For End Users

1. **Create Account**

   - Visit the platform and sign up with email
   - Verify your email address
   - Complete your profile setup

2. **Build Your Profile**

   - Upload a professional photo
   - Add your personal information
   - Write a compelling biography
   - Choose your custom subdomain

3. **Add Social Networks**

   - Connect your LinkedIn, GitHub, and other profiles
   - Toggle visibility for each platform
   - Validate URLs automatically

4. **Showcase Certifications**

   - Connect your Credly account
   - Automatically sync your badges
   - Display professional certifications

5. **Customize Appearance**
   - Choose your brand colors
   - Preview changes in real-time
   - Optimize for mobile devices

### For Developers

#### Adding New Features

```typescript
// Example: Adding a new certification provider
export const useGeneralStore = defineStore("general", {
  actions: {
    async getNewProviderCertifications(username: string) {
      // Implementation for new provider
    },
  },
});
```

#### Custom Components

```vue
<template>
  <bio-component
    :primary-color="color"
    :user-image="userImage"
    :user-name="userName"
    :user-position="userPosition"
    :user-bio="userBio"
    :user-social-networks="userSocialNetworks"
    :user-credly-badges="userCredlyBadges"
  />
</template>
```

---

## 🔧 Development

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start AWS Amplify sandbox
npx ampx sandbox

# Clean Quasar cache
npx quasar clean

# Update dependencies
npm update

# Run with specific AWS profile
npx ampx sandbox --profile your-profile
```

### Code Structure Best Practices

#### Vue 3 Composition API

```typescript
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from 'src/stores/User';

const user = useUserStore();
const userData = ref(null);

const computedValue = computed(() => {
  return userData.value?.name || 'Default Name';
});

onMounted(async () => {
  userData.value = await user.getCurrentUser();
});
</script>
```

#### Pinia Store Pattern

```typescript
export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: null,
    isAuthenticated: false,
  }),

  getters: {
    userName: (state) => state.currentUser?.name || "",
  },

  actions: {
    async login(credentials) {
      // Authentication logic
    },
  },
});
```

### Testing Strategy

```bash
# Unit tests (when implemented)
npm run test:unit

# E2E tests (when implemented)
npm run test:e2e

# Component testing
npm run test:component
```

---

## 🚀 Deployment

### AWS Amplify Deployment

```bash
# Deploy to AWS
npx ampx sandbox deploy

# Deploy with specific environment
npx ampx sandbox deploy --profile production
```

### Manual Deployment Steps

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy AWS resources**

   ```bash
   npx ampx sandbox deploy
   ```

3. **Configure custom domain** (optional)
   - Set up Route 53 hosted zone
   - Configure SSL certificates
   - Update DNS records

### Environment-Specific Deployments

```bash
# Development
npx ampx sandbox --profile dev

# Staging
npx ampx sandbox --profile staging

# Production
npx ampx sandbox --profile production
```

---

## 🧪 Testing

### Testing Framework Setup

```bash
# Install testing dependencies
npm install --save-dev @vue/test-utils vitest jsdom

# Run tests
npm run test
```

### Example Test Cases

```typescript
// tests/components/BioComponent.spec.ts
import { mount } from "@vue/test-utils";
import BioComponent from "src/components/BioComponent.vue";

describe("BioComponent", () => {
  it("renders user information correctly", () => {
    const wrapper = mount(BioComponent, {
      props: {
        userName: "John Doe",
        userPosition: "Developer",
      },
    });

    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("Developer");
  });
});
```

---

## 📚 API Reference

### Authentication Endpoints

```typescript
// User authentication
POST / auth / login;
POST / auth / register;
POST / auth / logout;
GET / auth / user;
```

### User Management

```typescript
// User CRUD operations
GET / api / users / { id };
PUT / api / users / { id };
DELETE / api / users / { id };
GET / api / users / subdomain / { subdomain };
```

### File Upload

```typescript
// Image upload to S3
POST / api / upload / image;
GET / api / upload / presigned - url;
```

### Credly Integration

```typescript
// Certification badges
GET /api/badges?userName={credlyUsername}
```

### GraphQL Schema

```graphql
type User {
  id: ID!
  color: String
  image: String!
  email: String!
  fullName: String!
  subdomain: String!
  jobOcupation: String!
  bio: String!
  socialNetwork: [String]
  credlyUsername: String
}
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow Vue 3 Composition API patterns
- Use TypeScript for type safety
- Follow Quasar Framework conventions
- Write meaningful commit messages
- Add documentation for new features
- Ensure responsive design compatibility

### Code Style

```bash
# Format code
npm run format

# Lint code
npm run lint

# Type check
npm run type-check
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. TypeScript Configuration Error

```bash
# Error: failed to resolve "extends":"@quasar/app-vite/tsconfig-preset"
# Solution: Update tsconfig.json with complete configuration
```

#### 2. AWS Amplify Sandbox Issues

```bash
# Clean and restart
npx quasar clean --qconf
npx ampx sandbox
```

#### 3. Node.js Version Compatibility

```bash
# Use Node.js 18+ or 20+
nvm use 20
npm install
```

#### 4. Dependency Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run dev

# AWS Amplify debug
AWS_AMPLIFY_DEBUG=true npm run dev
```

---

## 📊 Performance Optimization

### Frontend Optimization

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: WebP format support with fallbacks
- **Caching**: Intelligent browser caching strategies

### Backend Optimization

- **Lambda Cold Start**: Optimized function packaging
- **DynamoDB**: Efficient query patterns and indexing
- **S3**: CloudFront CDN integration for global delivery
- **API Gateway**: Request/response caching

---

## 🔒 Security

### Security Features

- **Authentication**: AWS Cognito with MFA support
- **Authorization**: Role-based access control
- **Data Encryption**: At-rest and in-transit encryption
- **Input Validation**: Comprehensive input sanitization
- **CORS**: Properly configured cross-origin policies

### Security Best Practices

```typescript
// Input validation example
const validateUrl = (val: string) => {
  const pattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return pattern.test(val) || "Please enter a valid URL";
};
```

---

## 📈 Analytics & Monitoring

### Built-in Analytics

- **User Engagement**: Profile view tracking
- **Performance Metrics**: Page load times and user interactions
- **Error Monitoring**: Automatic error reporting and logging
- **Usage Statistics**: Feature adoption and user behavior

### Monitoring Setup

```typescript
// CloudWatch integration
import { Logger } from "@aws-amplify/core";

const logger = new Logger("BioApp");
logger.info("User profile created", { userId, subdomain });
```

---

## 🌍 Internationalization

### Multi-language Support

```typescript
// i18n configuration
const messages = {
  en: {
    welcome: "Welcome to BIO Platform",
    createProfile: "Create Your Profile",
  },
  es: {
    welcome: "Bienvenido a BIO Platform",
    createProfile: "Crea Tu Perfil",
  },
};
```

---

## 📱 Mobile App (Future)

### Planned Mobile Features

- **React Native App**: Native mobile experience
- **Offline Support**: Profile caching for offline viewing
- **Push Notifications**: Profile update notifications
- **QR Code Sharing**: Easy profile sharing via QR codes

---

## 🎯 Roadmap

### Short Term (Q1 2024)

- [ ] Enhanced theme customization
- [ ] Additional certification providers
- [ ] Advanced analytics dashboard
- [ ] Mobile app development

### Medium Term (Q2-Q3 2024)

- [ ] Team/Organization profiles
- [ ] Custom domain support
- [ ] Advanced SEO features
- [ ] Integration marketplace

### Long Term (Q4 2024+)

- [ ] AI-powered profile optimization
- [ ] Video introduction support
- [ ] Portfolio project showcase
- [ ] Professional networking features

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **AWS Amplify Team** for the amazing fullstack platform
- **Vue.js Community** for the incredible framework
- **Quasar Framework** for the beautiful UI components
- **Credly** for the certification API integration
- **All Contributors** who help make this project better

---

## 📞 Support

### Get Help

- 📧 **Email**: support@bio.awslearn.cloud
- 💬 **Discord**: [Join our community](https://discord.gg/bio-platform)
- 📖 **Documentation**: [Full documentation](https://docs.bio.awslearn.cloud)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/bio-platform/issues)

### Professional Support

For enterprise support, custom development, or consulting services, please contact us at enterprise@bio.awslearn.cloud

---

<div align="center">

**Made with ❤️ by the BIO Platform Team**

[⭐ Star us on GitHub](https://github.com/yourusername/bio-platform) • [🐦 Follow on Twitter](https://twitter.com/bioplatform) • [💼 LinkedIn](https://linkedin.com/company/bio-platform)

</div>
