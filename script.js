// ─── PRODUCT DATA ───────────────────────────────────────────────────────────
const products = [
  {
    id: 1, name: "Watuh Alpine 32oz",     size: "32oz", price: 44.99,
    color: "#1E5FA8", colorName: "Pacific Blue",
    countries: ["US","AU","CA","UK"],
    isNew: true, sale: false,
    description: "Our flagship 32oz bottle, engineered for all-day adventures. TempShield™ insulation keeps drinks cold 24hr and hot 12hr."
  },
  {
    id: 2, name: "Watuh Summit 24oz",     size: "24oz", price: 37.99,
    color: "#2C3E50", colorName: "Midnight Black",
    countries: ["US","PH","SG","MY"],
    isNew: false, sale: false,
    description: "Compact 24oz for daily use. Sleek matte finish with powder-coated grip."
  },
  {
    id: 3, name: "Watuh Crest 40oz",      size: "40oz", price: 52.99,
    color: "#C0392B", colorName: "Ember Red",
    countries: ["US","UK","AU","CA"],
    isNew: false, sale: true,
    description: "Go big. The 40oz Crest keeps you hydrated through the longest trails and busiest workdays."
  },
  {
    id: 4, name: "Watuh Flow 18oz",       size: "18oz", price: 29.99,
    color: "#2E9E6A", colorName: "Forest Green",
    countries: ["PH","MY","SG"],
    isNew: false, sale: false,
    description: "The perfect everyday carry. Lightweight 18oz with a wide-mouth lid."
  },
  {
    id: 5, name: "Watuh Peak 12oz",       size: "12oz", price: 24.99,
    color: "#F39C12", colorName: "Sunrise Yellow",
    countries: ["US","CA","AU"],
    isNew: true, sale: false,
    description: "Small but mighty. The 12oz Peak is ideal for kids and short hikes."
  },
  {
    id: 6, name: "Watuh Ridge 32oz",      size: "32oz", price: 44.99,
    color: "#8E44AD", colorName: "Dusk Purple",
    countries: ["UK","AU","SG"],
    isNew: false, sale: false,
    description: "The Ridge in Dusk Purple. Same legendary performance, bold new color."
  },
  {
    id: 7, name: "Watuh Tide 24oz",       size: "24oz", price: 37.99,
    color: "#16A085", colorName: "Teal Wave",
    countries: ["US","PH","MY","SG"],
    isNew: true, sale: false,
    description: "Ocean-inspired Teal Wave finish. Perfect for coastal adventures."
  },
  {
    id: 8, name: "Watuh Frost 40oz",      size: "40oz", price: 49.99,
    color: "#B2BABB", colorName: "Arctic White",
    countries: ["US","CA","UK"],
    isNew: false, sale: true,
    description: "Clean, minimal Arctic White. The Frost 40oz is as elegant as it is functional."
  },
  {
    id: 9, name: "Watuh Ember 18oz",      size: "18oz", price: 29.99,
    color: "#E74C3C", colorName: "Lava Red",
    countries: ["AU","PH","MY"],
    isNew: false, sale: false,
    description: "Bold Lava Red for those who stand out. Lightweight 18oz with carry loop lid."
  },
  {
    id: 10, name: "Watuh Slate 32oz",     size: "32oz", price: 42.99,
    color: "#566573", colorName: "Charcoal Slate",
    countries: ["US","UK","CA","AU"],
    isNew: false, sale: false,
    description: "Understated Charcoal Slate. For the minimalist adventurer."
  },
  {
    id: 11, name: "Watuh Bloom 24oz",     size: "24oz", price: 37.99,
    color: "#F1948A", colorName: "Blush Pink",
    countries: ["PH","SG","MY","UK"],
    isNew: true, sale: false,
    description: "Soft Blush Pink, big performance. The Bloom 24oz is a fan favorite."
  },
  {
    id: 12, name: "Watuh Stone 12oz",     size: "12oz", price: 24.99,
    color: "#A0522D", colorName: "Sandstone Brown",
    countries: ["US","AU","CA"],
    isNew: false, sale: true,
    description: "Earthy Sandstone Brown. Compact 12oz — ideal for the espresso-fueled commuter."
  },
];

// ─── CART LOGIC ─────────────────────────────────────────────────────────────
function getCart() {
  return JSON.parse(localStorage.getItem('watuhCart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('watuhCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart  = getCart();
  const total = cart.reduce((a, b) => a + b.qty, 0);
  const el    = document.getElementById('cartCount');
  if (el) el.textContent = total;
}

function addToCart(id) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart(cart);

  // Feedback animation
  const btns = document.querySelectorAll(`[onclick="addToCart(${id})"]`);
  btns.forEach(btn => {
    const orig = btn.textContent;
    btn.textContent = '✓ Added';
    btn.style.background = '#2E9E6A';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.border = '';
    }, 1500);
  });
}

// Init cart count on every page
updateCartCount();
