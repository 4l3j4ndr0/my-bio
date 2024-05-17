import { defineStore } from "pinia";
import ApiService from "../Helpers/ApiService";
export const useGeneralStore = defineStore("general", {
  state: () => ({
    certifications: [],
  }),
  actions: {
    async getCredlyCertifications(userName: string) {
      try {
        // let response = await ApiService().get(
        //   `https://www.credly.com/users/${userName}/badges.json`
        // );
        // console.log("RESPONSE CREDLY:::", response.data);
        let response = {
          data: [
            {
              id: "8448c9d3-2254-4062-a65e-3e76eca09637",
              expires_at_date: "2026-07-31",
              issued_at_date: "2022-11-22",
              issued_to: "Alejandro Castaneda Ocampo",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2022-11-23T06:22:09.250-05:00",
              expires_at: "2026-07-30T20:00:00.000-04:00",
              issued_at: "2022-11-21T19:00:00.000-05:00",
              last_updated_at: "2023-08-01T05:18:10.945-04:00",
              updated_at: "2023-08-01T05:18:10.945-04:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "54225396-3c1a-44b6-ba14-9fe2f812842b",
                description:
                  "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.",
                global_activity_url:
                  "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Certified Solutions Architect – Associate",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-certified-solutions-architect-associate",
                show_badge_lmi: true,
                show_skill_tag_links: true,
                translatable: false,
                level: "Intermediate",
                time_to_earn: null,
                cost: null,
                type_category: "Certification",
                image: {
                  id: "0e284c3f-5164-4b21-8660-0d84737941bc",
                  url: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
                },
                image_url:
                  "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: true,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [
                  {
                    id: "6b1c7b5a-d668-48a5-9dfd-e5de1c432c31",
                    name: "AWS Certified Solutions Architect – Professional",
                    image: {
                      id: "2d84e428-9078-49b6-a804-13c15383d0de",
                      url: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-professional",
                  },
                  {
                    id: "6069fb52-0c27-42d7-852b-6aa86ea45e81",
                    name: "AWS Certified Cloud Practitioner",
                    image: {
                      id: "00634f82-b07f-4bbd-a6bb-53de397fc3a6",
                      url: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner",
                  },
                  {
                    id: "814f73aa-6ad7-4dea-8895-121134113997",
                    name: "AWS Certified SysOps Administrator – Associate",
                    image: {
                      id: "f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1",
                      url: "https://images.credly.com/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-sysops-administrator-associate",
                  },
                ],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "e1d83b85-adce-4c50-acc6-13701b0fc0df",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully passed the AWS Certified Solutions Architect – Associate exam.",
                    url: null,
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "87f75c05-6cff-4044-b641-f871a1ea345a",
                    name: "Amazon Web Services",
                    vanity_slug: "amazon-web-services",
                  },
                  {
                    id: "682d4927-14e7-490c-96d3-c8f3ef0995de",
                    name: "AWS",
                    vanity_slug: "aws",
                  },
                  {
                    id: "d914920b-ba3e-4220-9b51-957642f3104a",
                    name: "AWS Certification",
                    vanity_slug: "aws-certification",
                  },
                  {
                    id: "918edc32-0894-4957-a91f-d96300b8b8d3",
                    name: "AWS Cloud",
                    vanity_slug: "aws-cloud",
                  },
                  {
                    id: "abfd0cf0-7586-4cb8-9f23-0398da99a4cb",
                    name: "Cloud Architecture",
                    vanity_slug: "cloud-architecture",
                  },
                  {
                    id: "c42a5758-3258-4516-9188-5b019ddd1241",
                    name: "Cloud Certification",
                    vanity_slug: "cloud-certification",
                  },
                  {
                    id: "37229bc7-1a4e-478d-b834-17402ba02862",
                    name: "Cloud Data",
                    vanity_slug: "cloud-data",
                  },
                  {
                    id: "d787423d-a2c2-4515-953d-52a42e946fd9",
                    name: "Cloud Infrastructure",
                    vanity_slug: "cloud-infrastructure",
                  },
                  {
                    id: "f056df54-cafe-4713-bdc5-d4ac6734d76c",
                    name: "Cloud Services",
                    vanity_slug: "cloud-services",
                  },
                ],
              },
              image: {
                id: "0e284c3f-5164-4b21-8660-0d84737941bc",
                url: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
              },
              image_url:
                "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "9812bf1c-9323-4e69-a5b4-d92142bf1329",
              expires_at_date: "2026-05-31",
              issued_at_date: "2023-05-31",
              issued_to: "Alejandro Castaneda Ocampo",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2023-06-01T05:31:56.325-04:00",
              expires_at: "2026-05-30T20:00:00.000-04:00",
              issued_at: "2023-05-30T20:00:00.000-04:00",
              last_updated_at: "2023-06-01T05:31:56.326-04:00",
              updated_at: "2023-06-01T05:31:56.326-04:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "ac872ccd-75ef-4946-9f3e-decc233daa5b",
                description:
                  "Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.",
                global_activity_url:
                  "https://aws.amazon.com/certification/certified-developer-associate/",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Certified Developer – Associate",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-certified-developer-associate",
                show_badge_lmi: true,
                show_skill_tag_links: true,
                translatable: false,
                level: "Intermediate",
                time_to_earn: null,
                cost: null,
                type_category: "Certification",
                image: {
                  id: "b9feab85-1a43-4f6c-99a5-631b88d5461b",
                  url: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
                },
                image_url:
                  "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-developer-associate",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: true,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [
                  {
                    id: "114d6f12-244d-4b99-9967-7cf31381c975",
                    name: "AWS Certified Advanced Networking – Specialty",
                    image: {
                      id: "4d08274f-64c1-495e-986b-3143f51b1371",
                      url: "https://images.credly.com/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-advanced-networking-specialty",
                  },
                  {
                    id: "20f61a9f-06ff-43ad-ada3-b553e0189295",
                    name: "AWS Certified: Data Engineer – Associate",
                    image: {
                      id: "e5c85d7f-4e50-431e-b5af-fa9d9b0596e7",
                      url: "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-data-engineer-associate",
                  },
                  {
                    id: "216500a6-0ec6-40be-935c-254379a9a504",
                    name: "AWS Certified DevOps Engineer – Professional",
                    image: {
                      id: "bd31ef42-d460-493e-8503-39592aaf0458",
                      url: "https://images.credly.com/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-devops-engineer-professional",
                  },
                ],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "dc183dee-f3b7-4da3-9906-a3880fbd65ee",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully passed the AWS Certified Developer – Associate exam.",
                    url: null,
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "87f75c05-6cff-4044-b641-f871a1ea345a",
                    name: "Amazon Web Services",
                    vanity_slug: "amazon-web-services",
                  },
                  {
                    id: "682d4927-14e7-490c-96d3-c8f3ef0995de",
                    name: "AWS",
                    vanity_slug: "aws",
                  },
                  {
                    id: "d914920b-ba3e-4220-9b51-957642f3104a",
                    name: "AWS Certification",
                    vanity_slug: "aws-certification",
                  },
                  {
                    id: "918edc32-0894-4957-a91f-d96300b8b8d3",
                    name: "AWS Cloud",
                    vanity_slug: "aws-cloud",
                  },
                  {
                    id: "c42a5758-3258-4516-9188-5b019ddd1241",
                    name: "Cloud Certification",
                    vanity_slug: "cloud-certification",
                  },
                  {
                    id: "9ff46618-148c-4cd3-828e-104eabab5906",
                    name: "Code Deployment",
                    vanity_slug: "code-deployment",
                  },
                  {
                    id: "4ebc96e9-8533-4828-8ca7-e5dd2390e4cc",
                    name: "Code Development",
                    vanity_slug: "code-development",
                  },
                ],
              },
              image: {
                id: "b9feab85-1a43-4f6c-99a5-631b88d5461b",
                url: "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
              },
              image_url:
                "https://images.credly.com/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "14ffaaf3-913f-4c3b-9259-9da62a879d0f",
              expires_at_date: null,
              issued_at_date: "2022-09-02",
              issued_to: "Alejandro Castaneda",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2022-09-06T15:54:56.655-04:00",
              expires_at: null,
              issued_at: "2022-09-01T20:00:00.000-04:00",
              last_updated_at: "2022-09-06T15:54:56.655-04:00",
              updated_at: "2022-09-06T15:54:56.659-04:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "8ff373f9-82be-4e7f-870b-558e98cefb28",
                description:
                  "Earners of this badge are AWS Partners who have developed fundamental, technical knowledge of AWS cloud computing, global infrastructure, services, solutions, migration and security.",
                global_activity_url:
                  "https://aws.amazon.com/partners/training/course-descriptions/",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Partner: Accreditation (Technical)",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-partner-accreditation-technical",
                show_badge_lmi: false,
                show_skill_tag_links: false,
                translatable: false,
                level: null,
                time_to_earn: null,
                cost: null,
                type_category: "Learning",
                image: {
                  id: "81f903ed-c3a1-4f4b-afcd-e03331a5b12c",
                  url: "https://images.credly.com/images/81f903ed-c3a1-4f4b-afcd-e03331a5b12c/image.png",
                },
                image_url:
                  "https://images.credly.com/images/81f903ed-c3a1-4f4b-afcd-e03331a5b12c/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-accreditation-technical",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: true,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [
                  {
                    id: "1be182c8-e95e-49e5-bf31-137e408437a1",
                    name: "AWS Partner: SAP on AWS (Technical)",
                    image: {
                      id: "6099a08b-d18c-4f36-ad4e-b519c58eb0f1",
                      url: "https://images.credly.com/images/6099a08b-d18c-4f36-ad4e-b519c58eb0f1/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/6099a08b-d18c-4f36-ad4e-b519c58eb0f1/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-sap-on-aws-technical",
                  },
                  {
                    id: "17f867df-3e05-42c9-8f4d-0e8a920b27d1",
                    name: "AWS Partner: Sales Accreditation (Business)",
                    image: {
                      id: "a12fff38-aab2-4643-be27-7e5c39ddc75c",
                      url: "https://images.credly.com/images/a12fff38-aab2-4643-be27-7e5c39ddc75c/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/a12fff38-aab2-4643-be27-7e5c39ddc75c/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-sales-accreditation-business",
                  },
                  {
                    id: "20f61a9f-06ff-43ad-ada3-b553e0189295",
                    name: "AWS Certified: Data Engineer – Associate",
                    image: {
                      id: "e5c85d7f-4e50-431e-b5af-fa9d9b0596e7",
                      url: "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-data-engineer-associate",
                  },
                ],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "b3b231fc-cddc-4284-a470-9ae9ad0d5481",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully pass the AWS Partner: Accreditation (Technical) assessment",
                    url: "https://partnercentral.awspartner.com/LmsSsoRedirect?RelayState=%2flearningobject%2fwbc%3fid%3d43176",
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "87f75c05-6cff-4044-b641-f871a1ea345a",
                    name: "Amazon Web Services",
                    vanity_slug: "amazon-web-services",
                  },
                  {
                    id: "918edc32-0894-4957-a91f-d96300b8b8d3",
                    name: "AWS Cloud",
                    vanity_slug: "aws-cloud",
                  },
                  {
                    id: "a90660ef-acf8-4e50-bed5-1923d82b58b7",
                    name: "AWS Cloud Computing",
                    vanity_slug: "aws-cloud-computing",
                  },
                  {
                    id: "2b727469-9877-4ab3-b8df-915d7f28ee50",
                    name: "AWS Partner",
                    vanity_slug: "aws-partner",
                  },
                ],
              },
              image: {
                id: "81f903ed-c3a1-4f4b-afcd-e03331a5b12c",
                url: "https://images.credly.com/images/81f903ed-c3a1-4f4b-afcd-e03331a5b12c/image.png",
              },
              image_url:
                "https://images.credly.com/images/81f903ed-c3a1-4f4b-afcd-e03331a5b12c/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "4f5ac3a7-daa3-4efc-a60b-a092d7479590",
              expires_at_date: "2026-07-31",
              issued_at_date: "2023-07-31",
              issued_to: "Alejandro Castaneda Ocampo",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2023-08-01T05:18:11.534-04:00",
              expires_at: "2026-07-30T20:00:00.000-04:00",
              issued_at: "2023-07-30T20:00:00.000-04:00",
              last_updated_at: "2023-08-01T05:18:11.539-04:00",
              updated_at: "2023-08-01T05:18:11.539-04:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "6b1c7b5a-d668-48a5-9dfd-e5de1c432c31",
                description:
                  "Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices and trade-offs based on business context. Badge owners are able to design solutions across multiple platforms and providers.",
                global_activity_url:
                  "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Certified Solutions Architect – Professional",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-certified-solutions-architect-professional",
                show_badge_lmi: true,
                show_skill_tag_links: true,
                translatable: false,
                level: "Advanced",
                time_to_earn: null,
                cost: null,
                type_category: "Certification",
                image: {
                  id: "2d84e428-9078-49b6-a804-13c15383d0de",
                  url: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
                },
                image_url:
                  "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-professional",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: true,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [
                  {
                    id: "54225396-3c1a-44b6-ba14-9fe2f812842b",
                    name: "AWS Certified Solutions Architect – Associate",
                    image: {
                      id: "0e284c3f-5164-4b21-8660-0d84737941bc",
                      url: "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-solutions-architect-associate",
                  },
                  {
                    id: "814f73aa-6ad7-4dea-8895-121134113997",
                    name: "AWS Certified SysOps Administrator – Associate",
                    image: {
                      id: "f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1",
                      url: "https://images.credly.com/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-sysops-administrator-associate",
                  },
                  {
                    id: "6069fb52-0c27-42d7-852b-6aa86ea45e81",
                    name: "AWS Certified Cloud Practitioner",
                    image: {
                      id: "00634f82-b07f-4bbd-a6bb-53de397fc3a6",
                      url: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-cloud-practitioner",
                  },
                ],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "5f4306b1-391d-41c7-aa3f-9539e14bd0e4",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully passed the AWS Certified Solutions Architect – Professional exam.",
                    url: null,
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "87f75c05-6cff-4044-b641-f871a1ea345a",
                    name: "Amazon Web Services",
                    vanity_slug: "amazon-web-services",
                  },
                  {
                    id: "682d4927-14e7-490c-96d3-c8f3ef0995de",
                    name: "AWS",
                    vanity_slug: "aws",
                  },
                  {
                    id: "d914920b-ba3e-4220-9b51-957642f3104a",
                    name: "AWS Certification",
                    vanity_slug: "aws-certification",
                  },
                  {
                    id: "918edc32-0894-4957-a91f-d96300b8b8d3",
                    name: "AWS Cloud",
                    vanity_slug: "aws-cloud",
                  },
                  {
                    id: "abfd0cf0-7586-4cb8-9f23-0398da99a4cb",
                    name: "Cloud Architecture",
                    vanity_slug: "cloud-architecture",
                  },
                  {
                    id: "c42a5758-3258-4516-9188-5b019ddd1241",
                    name: "Cloud Certification",
                    vanity_slug: "cloud-certification",
                  },
                  {
                    id: "37229bc7-1a4e-478d-b834-17402ba02862",
                    name: "Cloud Data",
                    vanity_slug: "cloud-data",
                  },
                  {
                    id: "d787423d-a2c2-4515-953d-52a42e946fd9",
                    name: "Cloud Infrastructure",
                    vanity_slug: "cloud-infrastructure",
                  },
                  {
                    id: "7fe77620-7241-41d0-9312-255ab0bd8d76",
                    name: "Cloud Migration",
                    vanity_slug: "cloud-migration",
                  },
                  {
                    id: "f056df54-cafe-4713-bdc5-d4ac6734d76c",
                    name: "Cloud Services",
                    vanity_slug: "cloud-services",
                  },
                ],
              },
              image: {
                id: "2d84e428-9078-49b6-a804-13c15383d0de",
                url: "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
              },
              image_url:
                "https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "6c9e6a53-9c85-4d2d-abd7-f389d7be9253",
              expires_at_date: "2026-11-16",
              issued_at_date: "2023-11-16",
              issued_to: "Alejandro Castaneda Ocampo",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2023-11-16T22:07:25.807-05:00",
              expires_at: "2026-11-15T19:00:00.000-05:00",
              issued_at: "2023-11-15T19:00:00.000-05:00",
              last_updated_at: "2023-11-16T22:07:25.808-05:00",
              updated_at: "2023-11-16T22:07:25.808-05:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "614ce649-5d1e-4a98-81e4-f24b727dbeb9",
                description:
                  "Earners of this certification have an in-depth understanding of AWS security services and the shared responsibility model (between AWS and the customer). They demonstrated the ability to design, implement, and troubleshoot various security models in the AWS Cloud. Badge owners can leverage various security models for organizations of all sizes.",
                global_activity_url:
                  "https://aws.amazon.com/certification/certified-security-specialty/",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Certified Security – Specialty",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-certified-security-specialty",
                show_badge_lmi: true,
                show_skill_tag_links: true,
                translatable: false,
                level: "Advanced",
                time_to_earn: null,
                cost: null,
                type_category: "Certification",
                image: {
                  id: "53acdae5-d69f-4dda-b650-d02ed7a50dd7",
                  url: "https://images.credly.com/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
                },
                image_url:
                  "https://images.credly.com/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-security-specialty",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: true,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [
                  {
                    id: "475551cc-fb5c-4956-b8ef-c4aab6e30988",
                    name: "AWS Cloud Quest: Security",
                    image: {
                      id: "e66468bd-5a58-4136-8fb5-994e13501cf5",
                      url: "https://images.credly.com/images/e66468bd-5a58-4136-8fb5-994e13501cf5/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/e66468bd-5a58-4136-8fb5-994e13501cf5/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-security",
                  },
                  {
                    id: "20f61a9f-06ff-43ad-ada3-b553e0189295",
                    name: "AWS Certified: Data Engineer – Associate",
                    image: {
                      id: "e5c85d7f-4e50-431e-b5af-fa9d9b0596e7",
                      url: "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-data-engineer-associate",
                  },
                  {
                    id: "114d6f12-244d-4b99-9967-7cf31381c975",
                    name: "AWS Certified Advanced Networking – Specialty",
                    image: {
                      id: "4d08274f-64c1-495e-986b-3143f51b1371",
                      url: "https://images.credly.com/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-advanced-networking-specialty",
                  },
                ],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "9eb220e9-7a9f-4007-9866-bc8d1537caa0",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully passed the AWS Certified Security – Specialty exam.",
                    url: null,
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "87f75c05-6cff-4044-b641-f871a1ea345a",
                    name: "Amazon Web Services",
                    vanity_slug: "amazon-web-services",
                  },
                  {
                    id: "682d4927-14e7-490c-96d3-c8f3ef0995de",
                    name: "AWS",
                    vanity_slug: "aws",
                  },
                  {
                    id: "d914920b-ba3e-4220-9b51-957642f3104a",
                    name: "AWS Certification",
                    vanity_slug: "aws-certification",
                  },
                  {
                    id: "c42a5758-3258-4516-9188-5b019ddd1241",
                    name: "Cloud Certification",
                    vanity_slug: "cloud-certification",
                  },
                  {
                    id: "68fab466-80d0-441e-8db4-a036d2e711eb",
                    name: "Cloud Security",
                    vanity_slug: "cloud-security",
                  },
                  {
                    id: "d9b5c4dd-617e-4357-bd4d-e84494c4d943",
                    name: "Data Security",
                    vanity_slug: "data-security",
                  },
                  {
                    id: "7ef051aa-4e1e-4a80-af78-c9116bd123ee",
                    name: "IAM",
                    vanity_slug: "iam",
                  },
                  {
                    id: "e905a84a-0b89-447a-8227-e911494894de",
                    name: "Security Architecture",
                    vanity_slug: "security-architecture",
                  },
                  {
                    id: "ce88767c-8cea-478c-ae23-4f8e433b5c4a",
                    name: "Security Controls",
                    vanity_slug: "security-controls",
                  },
                  {
                    id: "1f1a5025-bf8a-4621-81e0-f5e6b51cc601",
                    name: "Security Management",
                    vanity_slug: "security-management",
                  },
                ],
              },
              image: {
                id: "53acdae5-d69f-4dda-b650-d02ed7a50dd7",
                url: "https://images.credly.com/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
              },
              image_url:
                "https://images.credly.com/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "cbb33f9e-330c-4100-ac2d-d4addc744cb1",
              expires_at_date: null,
              issued_at_date: "2022-11-07",
              issued_to: "Alejandro Castaneda",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2022-11-09T12:06:58.160-05:00",
              expires_at: null,
              issued_at: "2022-11-06T19:00:00.000-05:00",
              last_updated_at: "2022-12-22T15:06:40.281-05:00",
              updated_at: "2022-12-22T15:06:40.281-05:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "9a316ab0-cd5b-432c-a1f4-8e832ab64e1a",
                description:
                  "Earners of this badge understand the strategies and best practices for architecting in the cloud using the AWS Well-Architected Framework. Earners are able to conduct a Well-Architected review using the Well-Architected Tool.",
                global_activity_url:
                  "https://aws.amazon.com/architecture/well-architected/?wa-lens-whitepapers.sort-by=item.additionalFields.sortDate\u0026wa-lens-whitepapers.sort-order=desc",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "Well-Architected Proficient",
                public: false,
                recipient_type: "User",
                vanity_slug: "well-architected-proficient",
                show_badge_lmi: true,
                show_skill_tag_links: true,
                translatable: false,
                level: null,
                time_to_earn: null,
                cost: null,
                type_category: "Learning",
                image: {
                  id: "b870667f-00a3-48d7-b988-9c02b441b883",
                  url: "https://images.credly.com/images/b870667f-00a3-48d7-b988-9c02b441b883/image.png",
                },
                image_url:
                  "https://images.credly.com/images/b870667f-00a3-48d7-b988-9c02b441b883/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/well-architected-proficient",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: false,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "e4744dda-d0f0-43f2-aa3c-5453a44b3089",
                    activity_type: "Course",
                    required_badge_template_id: null,
                    title: "Complete the AWS Well-Architected course.",
                    url: null,
                  },
                  {
                    id: "3a102696-9bd2-4a74-a3f5-406a63b12edf",
                    activity_type: "Course",
                    required_badge_template_id: null,
                    title:
                      "If you are a Partner, please use this URL to access the Course",
                    url: "https://explore.skillbuilder.aws/learn/course/internal/view/elearning/108/aws-well-architected-badge",
                  },
                  {
                    id: "e2e91307-60f1-4ca0-a10f-3464e0850b13",
                    activity_type: "Course",
                    required_badge_template_id: null,
                    title:
                      "If you are an Amazonian, please use this URL to access the Course",
                    url: "https://kiku.aws.training/learningobject/curriculum?id=64259",
                  },
                  {
                    id: "12f22732-1df2-4757-84b3-fbb682eeaf0d",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title: "Successfully pass the Well-Architected assessment.",
                    url: null,
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "682d4927-14e7-490c-96d3-c8f3ef0995de",
                    name: "AWS",
                    vanity_slug: "aws",
                  },
                  {
                    id: "d280fbce-cf74-4968-a5a3-19dd83910173",
                    name: "AWS Cloud Best Practices",
                    vanity_slug: "aws-cloud-best-practices",
                  },
                  {
                    id: "827c21c5-2760-4f53-aede-3c9b4f1dbe5d",
                    name: "AWS Well-Architected",
                    vanity_slug: "aws-well-architected",
                  },
                  {
                    id: "26b7c1f6-e932-4cc3-b7ba-bf09f114e7db",
                    name: "AWS Well-Architected Framework",
                    vanity_slug: "aws-well-architected-framework",
                  },
                  {
                    id: "1a5e6e76-8ea2-49db-8ad9-1b4132970c60",
                    name: "AWS Well-Architected Tool",
                    vanity_slug: "aws-well-architected-tool",
                  },
                ],
              },
              image: {
                id: "b870667f-00a3-48d7-b988-9c02b441b883",
                url: "https://images.credly.com/images/b870667f-00a3-48d7-b988-9c02b441b883/image.png",
              },
              image_url:
                "https://images.credly.com/images/b870667f-00a3-48d7-b988-9c02b441b883/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "cc5ff5ed-0c50-47f2-9ad9-a77f335de725",
              expires_at_date: null,
              issued_at_date: "2023-05-17",
              issued_to: "Alejandro Castañeda",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2023-05-18T14:29:34.038-04:00",
              expires_at: null,
              issued_at: "2023-05-16T20:00:00.000-04:00",
              last_updated_at: "2023-05-18T14:29:34.052-04:00",
              updated_at: "2023-05-18T14:29:34.052-04:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "8a65e211-83ee-4c21-a09e-085af2fe7ace",
                description:
                  "Earners of this badge are individuals at AWS Partners or Amazon employees who have demonstrated a foundational business knowledge of AWS Migrations and the programs to support a customer’s migration to the AWS Cloud.",
                global_activity_url:
                  "https://explore.skillbuilder.aws/learn/course/internal/view/elearning/15102/aws-partnercast-migration-ambassador-2023-business",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Partner: Migration Ambassador 2023 (Business)",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-partner-migration-ambassador-2023-business",
                show_badge_lmi: false,
                show_skill_tag_links: false,
                translatable: false,
                level: null,
                time_to_earn: null,
                cost: null,
                type_category: "Learning",
                image: {
                  id: "2fdbfaed-d3e4-4cf1-b8c7-3acedeb85c0e",
                  url: "https://images.credly.com/images/2fdbfaed-d3e4-4cf1-b8c7-3acedeb85c0e/image.png",
                },
                image_url:
                  "https://images.credly.com/images/2fdbfaed-d3e4-4cf1-b8c7-3acedeb85c0e/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-migration-ambassador-2023-business",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: true,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [
                  {
                    id: "efa11ffa-3a26-4e02-a37e-2ec83f9e4be0",
                    name: "Migration Ambassador Foundations (Business) 2022",
                    image: {
                      id: "c2a04bd2-62d5-4b12-9188-5280fa77e5d6",
                      url: "https://images.credly.com/images/c2a04bd2-62d5-4b12-9188-5280fa77e5d6/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/c2a04bd2-62d5-4b12-9188-5280fa77e5d6/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/migration-ambassador-foundations-business-2022",
                  },
                  {
                    id: "1be182c8-e95e-49e5-bf31-137e408437a1",
                    name: "AWS Partner: SAP on AWS (Technical)",
                    image: {
                      id: "6099a08b-d18c-4f36-ad4e-b519c58eb0f1",
                      url: "https://images.credly.com/images/6099a08b-d18c-4f36-ad4e-b519c58eb0f1/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/6099a08b-d18c-4f36-ad4e-b519c58eb0f1/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-sap-on-aws-technical",
                  },
                  {
                    id: "17f867df-3e05-42c9-8f4d-0e8a920b27d1",
                    name: "AWS Partner: Sales Accreditation (Business)",
                    image: {
                      id: "a12fff38-aab2-4643-be27-7e5c39ddc75c",
                      url: "https://images.credly.com/images/a12fff38-aab2-4643-be27-7e5c39ddc75c/image.png",
                    },
                    image_url:
                      "https://images.credly.com/images/a12fff38-aab2-4643-be27-7e5c39ddc75c/image.png",
                    url: "https://www.credly.com/org/amazon-web-services/badge/aws-partner-sales-accreditation-business",
                  },
                ],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "3ecf6702-5582-4e7e-b47d-e592afc0799c",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully pass the AWS Partner: Migration Ambassador (Business) assessment with a score of 80% or more",
                    url: null,
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "71fefbab-eb2d-46bd-add8-18eb5c6ae51e",
                    name: "Amazon Web Services (AWS)",
                    vanity_slug: "amazon-web-services-aws",
                  },
                  {
                    id: "a0eb6a15-41d8-41dc-955f-2050dbf0a985",
                    name: "AWS Cloud and the Value Proposition",
                    vanity_slug: "aws-cloud-and-the-value-proposition",
                  },
                  {
                    id: "a90660ef-acf8-4e50-bed5-1923d82b58b7",
                    name: "AWS Cloud Computing",
                    vanity_slug: "aws-cloud-computing",
                  },
                  {
                    id: "0ab8c5f5-84cd-43f6-a04b-67b67827a1e7",
                    name: "AWS Cloud Migration",
                    vanity_slug: "aws-cloud-migration",
                  },
                  {
                    id: "860b7807-5c4e-4b31-8b35-686379930ed8",
                    name: "AWS Migration Programs",
                    vanity_slug: "aws-migration-programs",
                  },
                  {
                    id: "a3fc5256-1ed9-4c12-a508-92c19318d0ca",
                    name: "AWS Migration Resources",
                    vanity_slug: "aws-migration-resources",
                  },
                  {
                    id: "2b727469-9877-4ab3-b8df-915d7f28ee50",
                    name: "AWS Partner",
                    vanity_slug: "aws-partner",
                  },
                  {
                    id: "9c4f2016-6f6e-4f50-9163-e216afeb7d65",
                    name: "AWS Partner Network",
                    vanity_slug: "aws-partner-network",
                  },
                ],
              },
              image: {
                id: "2fdbfaed-d3e4-4cf1-b8c7-3acedeb85c0e",
                url: "https://images.credly.com/images/2fdbfaed-d3e4-4cf1-b8c7-3acedeb85c0e/image.png",
              },
              image_url:
                "https://images.credly.com/images/2fdbfaed-d3e4-4cf1-b8c7-3acedeb85c0e/image.png",
              evidence: [],
              recommendations: [],
            },
            {
              id: "a4b34cff-a0f1-499f-883c-ae2d68581e45",
              expires_at_date: null,
              issued_at_date: "2022-09-24",
              issued_to: "Alejandro Castañeda",
              locale: "en",
              public: true,
              state: "accepted",
              translate_metadata: false,
              accepted_at: "2022-11-18T13:24:27.801-05:00",
              expires_at: null,
              issued_at: "2022-09-23T20:00:00.000-04:00",
              last_updated_at: "2022-11-18T13:24:27.814-05:00",
              updated_at: "2022-11-18T13:24:27.814-05:00",
              earner_path: "/users/alejandro-castaneda9424",
              earner_photo_url: null,
              is_private_badge: false,
              user_is_earner: false,
              issuer: {
                summary:
                  "issued by Amazon Web Services Training and Certification",
                entities: [
                  {
                    label: "Issued by",
                    primary: true,
                    entity: {
                      type: "Organization",
                      id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                      name: "Amazon Web Services Training and Certification",
                      url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                      vanity_url:
                        "https://www.credly.com/org/amazon-web-services",
                      internationalize_badge_templates: false,
                      share_to_ziprecruiter: true,
                      verified: false,
                    },
                  },
                ],
              },
              badge_template: {
                id: "7aa80cdf-0394-46bc-9064-98a15b3dbda4",
                description:
                  "Earners of this badge have developed the technical skills and knowledge of AWS storage services with a focus on Amazon Simple Storage Service (S3).",
                global_activity_url: "http://aws.amazon.com/training/badges",
                earn_this_badge_url: null,
                enable_earn_this_badge: false,
                enable_detail_attribute_visibility: true,
                name: "AWS Knowledge: Object Storage",
                public: true,
                recipient_type: "User",
                vanity_slug: "aws-knowledge-object-storage",
                show_badge_lmi: true,
                show_skill_tag_links: true,
                translatable: false,
                level: null,
                time_to_earn: null,
                cost: null,
                type_category: "Learning",
                image: {
                  id: "100511fc-a919-4c0c-b313-7f49b6d09ef6",
                  url: "https://images.credly.com/images/100511fc-a919-4c0c-b313-7f49b6d09ef6/image.png",
                },
                image_url:
                  "https://images.credly.com/images/100511fc-a919-4c0c-b313-7f49b6d09ef6/image.png",
                url: "https://www.credly.com/org/amazon-web-services/badge/aws-knowledge-object-storage",
                owner_vanity_slug: "amazon-web-services",
                badge_template_earnable: false,
                recommendable: false,
                issuer: {
                  summary:
                    "issued by Amazon Web Services Training and Certification",
                  entities: [
                    {
                      label: "Issued by",
                      primary: true,
                      entity: {
                        type: "Organization",
                        id: "7b741b5c-231d-4925-8041-c64b6846f1c8",
                        name: "Amazon Web Services Training and Certification",
                        url: "https://www.credly.com/api/v1/organizations/7b741b5c-231d-4925-8041-c64b6846f1c8",
                        vanity_url:
                          "https://www.credly.com/org/amazon-web-services",
                        internationalize_badge_templates: false,
                        share_to_ziprecruiter: true,
                        verified: false,
                      },
                    },
                  ],
                },
                related_badge_templates: [],
                alignments: [],
                badge_template_activities: [
                  {
                    id: "a2ae1c85-584c-47c1-85c3-c7e6ab130f00",
                    activity_type: "Assessment",
                    required_badge_template_id: null,
                    title:
                      "Successfully pass the Object Storage Knowledge Badge Assessment.",
                    url: "https://explore.skillbuilder.aws/learn/public/learning_plan/view/51/storage-learning-plan-object-storage",
                  },
                ],
                endorsements: [],
                skills: [
                  {
                    id: "71fefbab-eb2d-46bd-add8-18eb5c6ae51e",
                    name: "Amazon Web Services (AWS)",
                    vanity_slug: "amazon-web-services-aws",
                  },
                  {
                    id: "682d4927-14e7-490c-96d3-c8f3ef0995de",
                    name: "AWS",
                    vanity_slug: "aws",
                  },
                  {
                    id: "918edc32-0894-4957-a91f-d96300b8b8d3",
                    name: "AWS Cloud",
                    vanity_slug: "aws-cloud",
                  },
                  {
                    id: "67172462-6c1a-4149-9534-0c06e2ea40d4",
                    name: "AWS Simple Storage Service (S3)",
                    vanity_slug: "aws-simple-storage-service-s3",
                  },
                  {
                    id: "5d55db02-7076-4a5e-ae14-52ddeeb08006",
                    name: "AWS Storage Services",
                    vanity_slug: "aws-storage-services",
                  },
                  {
                    id: "735c9f60-484b-4d55-b0c7-6bb3e66e861b",
                    name: "Cloud Object Storage",
                    vanity_slug: "cloud-object-storage",
                  },
                ],
              },
              image: {
                id: "100511fc-a919-4c0c-b313-7f49b6d09ef6",
                url: "https://images.credly.com/images/100511fc-a919-4c0c-b313-7f49b6d09ef6/image.png",
              },
              image_url:
                "https://images.credly.com/images/100511fc-a919-4c0c-b313-7f49b6d09ef6/image.png",
              evidence: [],
              recommendations: [],
            },
          ],
        };
        let badges = [];
        for (let i = 0; i < response.data.length; i++) {
          badges.push({
            image: response.data[i].image_url,
            url: `https://www.credly.com/badges/${response.data[i].id}/public_url`,
          });
        }
        return {
          status: true,
          badges,
          message: `Successfully fetched badges from Credly with user: ${userName}`,
        };
      } catch (error) {
        return {
          status: false,
          message: `Failed to fetch badges from Credly with user: ${userName}`,
        };
      }
    },
  },
});
