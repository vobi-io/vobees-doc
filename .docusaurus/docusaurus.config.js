export default {
  "plugins": [
    [
      "@docusaurus/plugin-ideal-image",
      {
        "quality": 70,
        "max": 1030,
        "min": 640,
        "steps": 2
      }
    ]
  ],
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "customFields": {
    "description": "An optimized site generator in React. Vobees helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more."
  },
  "themeConfig": {
    "announcementBar": {
      "id": "supportus",
      "content": "⭐️ If you like Vobees, give it a star on <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/vobi-io/vobees\">GitHub</a>! ⭐️"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "image": "img/vobees-soc.png",
    "gtag": {
      "trackingID": "UA-141789564-1"
    },
    "algolia": {
      "apiKey": "47ecd3b21be71c5822571b9f59e52544",
      "indexName": "vobees-2",
      "algoliaOptions": {
        "facetFilters": [
          "version:2.0.0-alpha.49"
        ]
      }
    },
    "navbar": {
      "hideOnScroll": true,
      "title": "Vobees",
      "logo": {
        "alt": "Vobees Logo",
        "src": "img/vobees.svg",
        "srcDark": "img/vobees_keytar.svg"
      },
      "links": [
        {
          "label": "Docs",
          "to": "docs/introduction",
          "position": "left",
          "activeBasePath": "docs",
          "items": [
            {
              "label": "1.0.0-alpha.49",
              "to": "docs/introduction"
            },
            {
              "label": "2.0.0-alpha.50",
              "to": "docs/2.0.0-alpha.50/introduction"
            },
            // {
            //   "label": "Master/Unreleased",
            //   "to": "docs/next/introduction"
            // }
          ]
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "showcase",
          "label": "Showcase",
          "position": "left"
        },
        {
          "to": "feedback",
          "label": "Feedback",
          "position": "left"
        },
        {
          "to": "versions",
          "label": "v2.0.0-alpha.49",
          "position": "right"
        },
        {
          "href": "https://github.com/vobi-io/vobees",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Introduction",
              "to": "docs/introduction"
            },
            {
              "label": "Installation",
              "to": "docs/installation"
            },
            {
              "label": "Migration from v1 to v2",
              "to": "docs/migrating-from-v1-to-v2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/vobees"
            },
            {
              "label": "Feedback",
              "to": "feedback"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/vobees"
            },
            {
              "label": "Help",
              "to": "help"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/vobi-io/vobees"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/vobees"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Vobi Logo",
        "src": "../img/vobi.png",
        "href": "https://vobi.io/"
      },
      "copyright": "Copyright © 2020 Vobi, Inc."
    }
  },
  "title": "Vobees",
  "tagline": "The Simplest Node.js framework for building APIs and microservices.",
  "organizationName": "facebook",
  "projectName": "vobees",
  "baseUrl": "/",
  "url": "https://vobees.vobi.io",
  "favicon": "img/vobees.ico",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "/Users/giga/projects/vobees/vobees-doc/sidebars.js",
          "editUrl": "https://github.com/vobi-io/vobees/edit/master/website/",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "remarkPlugins": [
            null
          ]
        },
        "blog": {
          "path": "../website-1.x/blog",
          "postsPerPage": 3,
          "feedOptions": {
            "type": "all",
            "copyright": "Copyright © 2020 Facebook, Inc."
          }
        },
        "theme": {
          "customCss": "/Users/giga/projects/vobees/vobees-doc/src/css/custom.css"
        }
      }
    ]
  ]
};