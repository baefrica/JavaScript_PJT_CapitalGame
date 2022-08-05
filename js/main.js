let countries = [];
countries = countries.concat(load_countries());
// if (countries == null) {
countries = [
  { cont: "아시아", name: "대만", capital: "타이베이", img: "img\\tw.png" },
  { cont: "유럽", name: "노르웨이", capital: "오슬로", img: "img\\bv.png" },
  { cont: "북아메리카", name: "미국", capital: "워싱턴DC", img: "img\\us.png" },
  { cont: "아시아", name: "대한민국", capital: "서울", img: "img\\kr.png" },
  { cont: "유럽", name: "러시아", capital: "모스크바", img: "img\\ru.png" },
  { cont: "유럽", name: "루마니아", capital: "부쿠레슈티", img: "img\\ro.png" },
  {
    cont: "유럽",
    name: "슬로바키아",
    capital: "브라티슬라바",
    img: "img\\rs.png",
  },
  { cont: "아시아", name: "일본", capital: "도쿄", img: "img\\jp.png" },
  {
    cont: "북아메리카",
    name: "자메이카",
    capital: "킹스턴",
    img: "img\\jm.png",
  },
  { cont: "아시아", name: "이라크", capital: "바그다드", img: "img\\iq.png" },
  { cont: "아프리카", name: "이집트", capital: "카이로", img: "img\\eg.png" },
  {
    cont: "남아메리카",
    name: "아르헨티나",
    capital: "부에노스아이레스",
    img: "img\\ar.png",
  },
  {
    cont: "남아메리카",
    name: "브라질",
    capital: "브라질리아",
    img: "img\\br.png",
  },
  { cont: "아시아", name: "베트남", capital: "하노이", img: "img\\vn.png" },
  { cont: "아시아", name: "튀르키예", capital: "이스탄불", img: "img\\tr.png" },
  { cont: "북아메리카", name: "캐나다", capital: "오타와", img: "img\\ca.png" },
  {
    cont: "아프리카",
    name: "소말리아",
    capital: "모가디슈",
    img: "img\\so.png",
  },
  {
    cont: "북아메리카",
    name: "멕시코",
    capital: "멕시코시티",
    img: "img\\mx.png",
  },
  {
    cont: "북아메리카",
    name: "그린란드",
    capital: "세인트조지스",
    img: "img\\gl.png",
  },
  { cont: "북아메리카", name: "쿠바", capital: "아바나", img: "img\\cu.png" },
  {
    cont: "북아메리카",
    name: "파나마",
    capital: "파나마시티",
    img: "img\\pa.png",
  },
  {
    cont: "북아메리카",
    name: "과테말라",
    capital: "과테말라시티",
    img: "img\\gt.png",
  },
  {
    cont: "북아메리카",
    name: "온두라스",
    capital: "테구시갈파",
    img: "img\\hn.png",
  },
  {
    cont: "북아메리카",
    name: "코스타리카",
    capital: "산호세",
    img: "img\\cr.png",
  },
  {
    cont: "아프리카",
    name: "남아공",
    capital: "케이프타운",
    img: "img\\za.png",
  },
  {
    cont: "아프리카",
    name: "나이지리아",
    capital: "아부자",
    img: "img\\ng.png",
  },
  { cont: "아프리카", name: "케냐", capital: "나이로비", img: "img\\ke.png" },
  { cont: "아프리카", name: "가나", capital: "아크라", img: "img\\gh.png" },
  { cont: "아프리카", name: "세네갈", capital: "다카르", img: "img\\sn.png" },
  { cont: "아프리카", name: "모로코", capital: "바라트", img: "img\\ma.png" },
  { cont: "아프리카", name: "말리", capital: "바마코", img: "img\\ml.png" },
  { cont: "아프리카", name: "우간다", capital: "캄팔라", img: "img\\ug.png" },
  { cont: "아프리카", name: "앙골라", capital: "루안다", img: "img\\ao.png" },
  { cont: "아프리카", name: "카메룬", capital: "야운데", img: "img\\cm.png" },
  {
    cont: "아프리카",
    name: "코트디부아르",
    capital: "야무수크로",
    img: "img\\ci.png",
  },
  { cont: "아프리카", name: "튀니지", capital: "튀니스", img: "img\\tn.png" },
  { cont: "아프리카", name: "토고", capital: "로메", img: "img\\tg.png" },
  { cont: "오세아니아", name: "괌", capital: "하갓냐", img: "img\\gu.png" },
  {
    cont: "오세아니아",
    name: "뉴질랜드",
    capital: "웰링턴",
    img: "img\\nz.png",
  },
  {
    cont: "오세아니아",
    name: "파푸아뉴기니",
    capital: "포트모르즈비",
    img: "img\\pg.png",
  },
];

// }
console.log(countries);

let member = load_member();

// document.querySelector("h1").addEventListener("click", open_add_modal);
load_flags();

let submit_answer_btn = document.querySelector("#submit-answer");
submit_answer_btn.addEventListener("click", submit_answer);

// let cont_box = document.querySelector("#cont_box");
// cont_box.addEventListener("change", load_flags(cont_box.value));
//===================================기타 모음 ===================================

const country = {
  cont: "", //대륙
  name: "",
  capital: "",
  img: "",
};

//===================================함수 모음 ===================================

//===================================성찬이 한거=================================

// 회원가입 모달 켜기
function open_join_modal() {
  let modal = document.querySelector("#join-modal");
  console.log(modal);
  modal.style.display = "block";
}

// 회원가입 클릭하면 모달 띄우기
function click_join() {
  let join_btn = document.querySelector("#join");
  join_btn.addEventListener("click", open_join_modal);
}
click_join();

// 회원가입

document.querySelector("#jsubmit").addEventListener("click", join);
function join() {
  member.push(document.querySelector("#jnickname").value);
  localStorage.setItem("memberlist", JSON.stringify(member));
  document.querySelector("#join-modal").style.display = "none";
}

function load_member() {
  let tmp = localStorage.getItem("memberlist");
  return JSON.parse(tmp);
}

// 로그인 모달 켜기
function open_login_modal() {
  let modal = document.querySelector("#login-modal");
  console.log(modal);
  document.querySelector("#nickname").value = "";
  modal.style.display = "block";
}

// 로그인 클릭하면 모달 띄우기
function click_login() {
  let login_btn = document.querySelector("#login");
  login_btn.addEventListener("click", open_login_modal);
}
click_login();

//로그인하기
document.querySelector("#submit-login").addEventListener("click", do_login);
function do_login() {
  document.querySelector("#login-modal").style.display = "none";
  let login_id = document.querySelector("#nickname").value;
  console.log(login_id);
  console.log(member);
  for (let i = 0; i < member.length; i++) {
    if (member[i] == login_id) {
      alert("로그인 성공");
      document.querySelector(".login-box").style.display = "none";
      document.querySelector(".logout-box").style.display = "block";
      document.querySelector(".ranking h3").innerText = login_id + "님";
      return;
    }
  }
  alert("존재하지 않는 아이디입니다");
}

//로그아웃 하기
document.querySelector("#logout").addEventListener("click", do_logout);
function do_logout() {
  document.querySelector(".login-box").style.display = "block";
  document.querySelector(".logout-box").style.display = "none";
  document.querySelector(".ranking h3").innerText = "";
}

//====================================내가 한거=====================================

//국기들 로딩하기
function load_flags(element) {
  let flag_box = document.querySelector(".flags");
  if (element) {
    let tmp_arr = [];
    for (let i = 0; i < countries.length; i++) {
      //   console.log(countries[i].cont + " 그리고 " + element + "");
      if (countries[i].cont == element) {
        tmp_arr.push(countries[i]);
      }
    }
    flag_box.innerHTML = "";
    for (let i = 0; i < tmp_arr.length; i++) {
      flag_box.innerHTML +=
        "<li><a><img src='" +
        tmp_arr[i].img +
        "' title='" +
        tmp_arr[i].name +
        "'/></a></li>";
    }
  } else {
    flag_box.innerHTML = "";
    for (let i = 0; i < countries.length; i++) {
      flag_box.innerHTML +=
        "<li><a><img src='" +
        countries[i].img +
        "' title='" +
        countries[i].name +
        "'/></a></li>";
    }
  }
  event_binding();
}

//이벤트 연동하기
function event_binding() {
  let flags = document.querySelectorAll(".flags img");
  for (let i = 0; i < flags.length; i++) {
    flags[i].addEventListener("click", click_flag);
  }
}

//국가 삭제하기
function delete_country() {
  let formData = document.frm;
  let element = formData.del_name.value;
  console.log("삭제할 나라이름 : " + element);
  if (element) {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name == element) {
        countries.splice(i, 1);
        console.log(element + "삭제 되었습니다.");
        let tmp_arr = JSON.stringify(countries);
        localStorage.setItem("country", tmp_arr);
        return;
      }
    }
  }
}

document
  .querySelector("#delete-button")
  .addEventListener("click", delete_country);

//국가 추가하기
function add_country() {
  let formData = document.frm;

  let now = country;
  now.capital = formData.capital.value;
  now.name = formData.name.value;
  now.capital = formData.capital.value;
  now.cont = formData.cont.value;
  now.img = "img\\" + formData.img.value + ".png";
  countries.push(now);
  let tmp_arr = JSON.stringify(countries);
  localStorage.setItem("country", tmp_arr);
  document.querySelector("#add-modal").style.display = "none";
}

//국가 로딩하기
function load_countries() {
  let str_list = localStorage.getItem("country");
  return JSON.parse(str_list);
}

//국가 등록 모달 켜기
function open_add_modal() {
  let modal = document.querySelector("#add-modal");
  console.log(modal);
  modal.style.display = "block";
}

//답변 모달 켜기
function open_modal() {
  let modal = document.querySelector("#answer-modal");
  console.log(modal);
  document.querySelector("#answer-capital").value = "";
  modal.style.display = "block";
}
//답변 모달 끄기
function close_modal() {
  let modal = document.querySelector("#answer-modal");

  modal.style.display = "none";
}

//국기 버튼을 클릭
//모달의 내용이 국기 내용으로 바뀌고 모달이 켜짐
function click_flag() {
  console.log("클릭");
  let modal_img = document.querySelector(".modal-flag");
  modal_img.src = this.src;
  document.querySelector(".modal h3").innerHTML = this.title;
  open_modal();
}

//정답 입력 후 확인 클릭
function submit_answer() {
  let your_answer = document.querySelector("#answer-capital").value;
  let now_name = document.querySelector("#answer-modal h3").innerHTML;
  console.log("국가 이름... " + now_name);
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name == now_name) {
      if (countries[i].capital == your_answer) {
        console.log("정답");
        document.querySelector("#o-mark").style.display = "block";
        setTimeout(() => {
          document.querySelector("#o-mark").style.display = "none";
        }, 1000);
        return close_modal();
      }
    }
  }

  console.log("실패...");
  document.querySelector("#x-mark").style.display = "block";
  setTimeout(() => {
    document.querySelector("#x-mark").style.display = "none";
  }, 1000);
  close_modal();
}
