import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
if (!sessionStorage.language){
  sessionStorage.language = "zh";
}
/*if (!sessionStorage.user){
  sessionStorage.user = '';
}*/
const state={
  language: sessionStorage.language,
  user: sessionStorage.user,
  config: {
    "zh": {
      "nav": [
        {
          "name": "首页",
          "path": "/index"
        },
        {
          "name": "关于NewStar",
          "path": "/aboutUs"
        },
        {
          "name": "大赛资讯",
          "path": "/Information/news",
          "children": [
            {
              "name": "大赛章程",
              "path": "/Information/charter"
            },
            {
              "name": "大赛动态",
              "path": "/Information/news"
            },
            {
              name: "媒体聚焦",
              path: "/Information/mediaFocus"
            }
          ]
        },
        {
          "name": "行业资讯",
          "path": "/industry"
        },
        {
          "name": "大师库",
          "path": "/expert"
        },
        {
          "name": "参赛作品",
          "path": "/opus"
        },
        {
          "name": "报名参赛",
          "path": "/user"
        },
        {
          "name": "资料库",
          "path": "/database/aluminum",
          "children": [
            {
              "name": "大沥铝材",
              "path": "/database/aluminum"
            },
            {
              "name": "盐步内衣",
              "path": "/database/underwear"
            }
          ]
        }
      ],
      "sign": {
        "signIn": {
          "name": "登录",
          "path": "/login"
        },
        "signOut": {
          "name": "退出",
          "path": "/login"
        }
      },
      "web": {
        "title": {
          "master": "大师库 | Master library",
          "news": "大赛动态 | Competition dynamics",
          "media": "媒体聚焦 | Media Focus"
        },
        "others": {
          "more": "更多",
          loadMore: "加载更多",
          notMore: "没有更多数据了",
          sort: "排序",
          check: "查看",
          "view": "浏览量",
          field: "所属领域",
          enterprise: "所属企业",
          signIn:"登录",
          signOut: "退出",
          weChat: "公众号"
        },
        sex: {
          man: "男",
          woman: "女"
        },
        form: {
          phoneTip: "输入手机号码",
          codeTip: "输入验证码",

          sendCode: "发送验证码",

          code: '验证码',
          mobile: "手机号码",
          contact: "联系方式",
          email: "电子邮箱",
          address: "地址"
        },
        works: {
          filter: {
            type: [
              {
                title: "全部作品",
                count: 0
              },
              {
                title: "入围作品",
                count: 0
              },
              {
                title: "获奖作品",
                count: 0
              }
            ],
            sort: [
              {title: "时间"},
              {title: "浏览"},
              {title: "推荐"}
            ]
          },
          empty: "作品正在征集中，敬请期待..."
        },
        news: {
          empty: "大赛动态更新中，敬请期待..."
        },
        media: {
          empty: "媒体聚焦内容更新中，敬请期待..."
        },
        user: {
          title: "个人信息",
          NSId: "NewStar 个人ID",
          name: "姓名",
          sex: "",
          birthday: "出生年月日",
          IDcard: "身份证号码",
          unit: "学校/单位名称",
          graduation: "毕业年月日",
          department: "所在院/系",
          wx: "微信",
          address: "通讯地址",
          zipcode: "邮编",
          email: "邮箱",
          opus: "参赛作品",
          opusTil: "作品题目",
          opusType: "作品类别",
          opusTeacher: "指导老师",
          opusDesc: "作品简要说明",
          opusRemarks: "备注",
          updata: "更新信息",
          down: "下载表格",
          description: [
            {
              title: "填表说明",
              list: [
                "官网报名ID为本届大赛唯一官网（http://newstar.91ant.com）报名所注册的帐号；参赛者请写明院校和系别（单位），填写详细有效的通讯地址，初赛参赛者的表格无需盖章，填妥后发至；如参赛作品入选答辩阶段，则参赛者须用电脑打印该表格，经作者所在院系（单位）盖章后方生效，参赛者携此表与作品一起参加2018NewStar国际设计奖现场答辩。",
                "如果是团队参赛，作者姓名填写主要设计者姓名，在备注处填写其他参与者姓名。",
                "参赛作品不超过两份（含两份）。",
                "进入答辩阶段的参赛者须在此表填写对作品的简要说明。"
              ]
            },
            {
              title: "作者声明",
              list: [
                "本人同意2018NewStar国际设计奖所有参赛细则。",
                "本人确认主办方不以盈利为目的对本人作品的发表权。",
                "本人确认以上所送作品为本人独立设计与制作，如果为合作作品，已经注明。如果引起著作权纠纷由本人全权负责。"
              ]
            }
          ]
        },
        login: {
          title: "登录 | Login",
          titleSub: "免注册，使用手机动态验证码登录。",
        },
        index: {
          master: "NewStar国际设计奖汲取了IOD创意大师的经验与人脉网。IOD创意大师由600多位世界顶级创意大师组成。"
        },
        industry: {
          title: "行业资讯 | Industry Information",
          empty: "行业资讯内容更新中，敬请期待..."
        }
      },
      "footer": {
        "nav":[
          {
            "title": "关于NewStar",
            "href": "/aboutUs"
          },
          {
            "title": "联系我们",
            "href": "/contactUs"
          },
          {
            "title": "法律声明",
            "href": "/statement"
          }
        ],
        "copyright": "版权所有 91Ant.Copyright © 2018.All rights reserved.",
        "number": "粤ICP备13078953号-1"
      }
    },
    "en": {
      "nav": [
        {
          "name": "Home",
          "path": "/index"
        },
        {
          "name": "About NewStar",
          "path": "/aboutUs"
        },
        {
          "name": "Information",
          "path": "/Information/news",
          "children": [
            {
              "name": "Competition regulations",
              "path": "/Information/charter"
            },
            {
              "name": "Competition dynamics",
              "path": "/Information/news"
            },
            {
              "name": "Media Focus",
              "path": "/Information/mediaFocus"
            }
          ]
        },
        {
          "name": "Industry Information",
          "path": "/industry"
        },
        {
          "name": "Master library",
          "path": "/expert"
        },
        {
          "name": "Works",
          "path": "/opus"
        },
        {
          "name": "Join",
          "path": "/user"
        },
        {
          "name": "database",
          "path": "/database/aluminum",
          "children": [
            {
              "name": "Dali Aluminum",
              "path": "/database/aluminum"
            },
            {
              "name": "Yanbu underwear",
              "path": "/database/underwear"
            }
          ]
        }
      ],
      "sign": {
        "signIn": {
          "name": "sign in",
          "path": "/login"
        },
        "signOut": {
          "name": "sign out",
          "path": "/login"
        }
      },
      "web": {
        "title": {
          "master": "Master library",
          "news": "Competition dynamics",
          "media": "Media Focus"
        },
        "others": {
          "more": "More",
          loadMore: "More",
          notMore: "No more data",
          sort: "Sort",
          check: "check",
          "view": "page views",
          field: "The field",
          enterprise: "Enterprise",
          signIn:"sign in",
          signOut: "sign out",
          weChat: "WeChat Official Accounts"
        },
        sex: {
          man: "man",
          woman: "woman"
        },
        form: {
          phoneTip: "Enter the phone number",
          codeTip: "Enter confirmation code",

          sendCode: "Send the code",

          code: 'Verification code',
          mobile: "mobile",
          contact: "Contact",
          email: "E-mail",
          address: "address",

        },
        works: {
          filter: {
            type: [
              {
                title: "All",
                count: 0
              },
              {
                title: "Finalists",
                count: 0
              },
              {
                title: "Winning",
                count: 0
              }
            ],
            sort: [
              {title: "Time"},
              {title: "View"},
              {title: "Recommend"}
            ]
          },
          empty: "Works are collecting, so stay tuned ..."
        },
        news: {
          empty: "Dynamic update contest, so stay tuned ..."
        },
        media: {
          empty: "Media focus content update, so stay tuned ..."
        },
        user: {
          title: "Information",
          NSId: "NewStar ID",
          name: "name",
          sex: "",
          birthday: "date of birth",
          IDcard: "IDcard",
          unit: "School / organization name",
          graduation: "Graduation day",
          department: "The hospital / department",
          wx: "WeChat",
          address: "mailing address",
          zipcode: "Zip code",
          email: "mailbox",
          opus: "Works",
          opusTil: "title",
          opusType: "type",
          opusTeacher: "instructor",
          opusDesc: "A brief description of the work",
          opusRemarks: "Remarks",
          updata: "Update information",
          down: "Download",
          description: [
            {
              title: "Fill in the form",
              list: [
                "The registration number of the official website is the account registered for the sole official website (http://newstar.91ant.com) of the contest. Please specify the institutions and departments (units), fill in the detailed and effective mailing address, the preliminary contestants If no entry is required, a copy of the form will be sent to. If the entry is selected for defense, the participant must print the form on a computer and take effect after the seal is sealed by the author's institution (unit). The participant will bring the form together with his work Participate in the 2018NewStar International Design Award on-site reply.",
                "In the case of a team entry, the author's name should be filled in with the name of the main designer and the name of the other participants in the note.",
                "No more than two entries (two included).",
                "Participants entering the defense stage should complete a brief description of the work on this form."
              ]
            },
            {
              title: "Authors statement",
              list: [
                "I agree to the 2018NewStar International Design Award for all competition rules.",
                "I confirm the organizers do not for the purpose of profit for my work the right of publication.",
                "I confirm the above sent works for my own design and production, if the cooperation work, have been marked. If the copyright dispute caused by my sole responsibility."
              ]
            }
          ]
        },
        login: {
          title: "Login",
          titleSub: "Free registration, use mobile phone verification code login.",
        },
        index: {
          master: "NewStar Design Awards draws on the experience and networks of the Ideas on Design Creative Masters. Over 600 of the world’s most innovative creative practitioners are part of the IOD Creative Masters Library."
        },
        industry: {
          title: "行业资讯 | Industry Information"
        }
      },
      "footer": {
        "nav":[
          {
            "title": "About",
            "href": "/aboutUs"
          },
          {
            "title": "Contact Us",
            "href": "/contactUs"
          },
          {
            "title": "Legal Notices",
            "href": "/statement"
          }
        ],
        "copyright": "Copyright © 2018 Design Intellgence Award. All rights reserved",
        "number": "粤ICP备13078953号-1"
      }
    }
  }
};
const mutations = {
  language(state,language) {
    state.language = sessionStorage.language = language
  },
  isLogin(state,user) {
    state.user = sessionStorage.user = user;
  },
  loginout(state){
    state.user = sessionStorage.user = '';
  }
};
export default new Vuex.Store({
  state,mutations
})


// {{$store.state.count}}
