import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  const logoUrls = [
    "https://lo-go.vn/wp-content/uploads/2020/09/Logo-THPT-Nguyen-Van-Thoai-Da-Nang.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_THPT_Nguy%E1%BB%85n_V%C3%83n_Tho%E1%BA%A1i.png/512px-Logo_THPT_Nguy%E1%BB%85n_V%C3%83n_Tho%E1%BA%A1i.png",
    "https://brandcom.vn/wp-content/uploads/2020/08/logo-thpt-nguyen-van-thoai.png",
    "https://static.baodanang.vn/dataimages/202008/original/images2377765_logo.jpg",
    "https://id.edu.vn/wp-content/uploads/2021/01/logo-nguyen-van-thoai.png"
  ];
const logoNVT = logoUrls[0];
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const currentSrc = img.src;
    const nextIndex = logoUrls.findIndex(url => url === currentSrc) + 1;

    if (nextIndex < logoUrls.length) {
      img.src = logoUrls[nextIndex];
    } else {
      // Final fallback to text
      img.style.display = 'none';
      const parent = img.parentElement;
      if (parent) {
        parent.classList.add('bg-emerald-600');`` 
        if (!parent.querySelector('.fallback-text')) {
          const span = document.createElement('span');
          span.textContent = 'NVT';
          span.className = 'fallback-text text-white font-black text-[10px] uppercase italic';
          parent.appendChild(span);
        }
      }
    }
  };

  return (
  <div className={`${className} bg-white rounded-full flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm relative`}>
   <img
  src={logoUrls[0]} // Sửa dòng này
  alt="Logo THPT Nguyễn Văn Thoại"
  className="w-full h-full object-contain p-0.5"
  onError={handleImageError}
  referrerPolicy="no-referrer"
/>
  </div>
);
};

export default Logo;
