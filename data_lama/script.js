// hamburger
const hamburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');
const shortcut = document.querySelector('#shortcut');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    shortcut.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    shortcut.classList.add('hidden');
  }
};

// fetch portfolio data
let portfolioUrls = '../../portfolio.json';
let portfolioContainer = document.querySelector('#portfolio-container');

const portfolioResource = async () => {
  let data = await fetch(portfolioUrls);
  let json = await data.json();
  try {
    // buat loading disini
    return json.portfolio;
  } catch (err) {
    // kasih pesan error disini
    console.log(err);
  }
};

const insertPortfolio = async () => {
  const portfolio = await portfolioResource();
  // console.log(portfolio);
  portfolio.forEach((porto) => {
    portfolioContainer.innerHTML += portfolioTemplate(porto);
  });
};

const portfolioTemplate = (porto) => `
                          <div class="mb-12 p-4 md:w-1/2 hover:bg-slate-200 hover:rounded-lg hover:transition hover:transition-duration-2000">
                            <a href="${porto.url}" rel="noopener noreferrer" target="_blank">
                              <div class="overflow-hidden rounded-md shadow-md">
                                <img src="${porto.image}" alt="${porto.name}" width="w-full" />
                              </div>
                              <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                                ${porto.name}
                              </h3>
                              <p class="font-medium text-base text-secondary">
                                <span class="font-semibold text-dark">Tech</span>: ${porto.tech}
                              </p>
                              <p class="font-medium text-base text-secondary">
                                <span class="font-semibold text-dark">Feature</span>: ${porto.feature}
                              </p>
                            </a>
                          </div>`;

insertPortfolio();
{
  /* <div class="mb-12 p-4 md:w-1/2 hover:bg-slate-200 hover:rounded-lg hover:transition hover:transition-duration-2000">
  <a href="${porto.url}" rel="noopener noreferrer" target="_blank">
    <div class="overflow-hidden rounded-md shadow-md">
      <img src="${porto.image}" alt="${porto.name}" width="w-full" />
    </div>
    <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
      ${porto.name}
    </h3>
    <p class="font-medium text-base text-secondary">
      <span class="font-semibold text-dark">Tech</span>: ${porto.tech}
    </p>
    <p class="font-medium text-base text-secondary">
      <span class="font-semibold text-dark">Feature</span>: ${porto.feature}
    </p>
  </a>
</div>; */
}
