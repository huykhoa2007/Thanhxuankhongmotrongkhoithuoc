import { HeartCrack, BrainCircuit, Activity, Accessibility } from 'lucide-react';

export const causes = [
  { 
    title: "Sức hút từ 'Cái tôi' ảo", 
    desc: "Nghĩ rằng hút thuốc, đặc biệt là thuốc lá điện tử với khói dày và mùi thơm, là thể hiện sự sành điệu, cá tính và đẳng cấp trước bạn bè.", 
    color: "text-blue-500", 
    icon: "💎" 
  },
  { 
    title: "Ảo tưởng về sự tỉnh táo", 
    desc: "Lầm tưởng nicotine giúp giảm stress, bớt mệt mỏi trong học tập. Thực chất, nó chỉ tạo ra sự hưng phóng giả và gây lệ thuộc nặng nề vào hóa chất.", 
    color: "text-amber-500", 
    icon: "⚡" 
  },
  { 
    title: "Lỗ hổng kiến thức", 
    desc: "Chưa nhận thức đúng về tác hại của nicotine thế hệ mới. Tin vào những lời quảng cáo 'an toàn hơn thuốc lá điếu' từ phía người bán.", 
    color: "text-rose-500", 
    icon: "📖" 
  }
];

export const steps = [
  { 
    num: "Q", 
    title: "Quyết tâm", 
    desc: "Lập danh sách các lý do bỏ thuốc: Vì sức khỏe, vì gia đình, vì tương lai tươi sáng tại mái trường Nguyễn Văn Thoại." 
  },
  { 
    num: "C", 
    title: "Chọn ngày", 
    desc: "Chọn một dấu mốc quan trọng trong 2 tuần tới. Hãy coi đó là ngày 'Tự do' của cuộc đời bạn." 
  },
  { 
    num: "D", 
    title: "Dọn dẹp", 
    desc: "Loại bỏ mọi thứ liên quan đến thuốc lá khỏi môi trường sống. Xóa sạch những hình ảnh kích thích ham muốn cũ." 
  },
  { 
    num: "H", 
    title: "Hỗ trợ", 
    desc: "Báo cho người thân và bạn bè. Tìm đến sự tư vấn của thầy cô hoặc bác sĩ chuyên khoa nếu cần sự giúp đỡ." 
  },
  { 
    num: "K", 
    title: "Kiên trì", 
    desc: "Tránh xa những tình huống dễ gây tái nghiện. Mỗi lần vượt qua cơn thèm là một lần bạn chiến thắng chính mình." 
  }
];

export const symptoms = [
  { 
    icon: BrainCircuit, 
    label: "Tâm trạng", 
    desc: "Cảm giác bứt rứt, dễ nổi cáu, lo âu, bồn chồn và khó kiểm soát cảm xúc.", 
    severity: 85 
  },
  { 
    icon: HeartCrack, 
    label: "Hệ tuần hoàn", 
    desc: "Nhịp tim chậm lại, huyết áp có thể thay đổi nhẹ khi cơ thể điều chỉnh lại.", 
    severity: 40 
  },
  { 
    icon: Activity, 
    label: "Thể chất", 
    desc: "Thèm ăn mãnh liệt, mệt mỏi, ho kéo dài (do phổi đang tự làm sạch chất nhầy).", 
    severity: 70 
  },
  { 
    icon: Accessibility, 
    label: "Tập trung", 
    desc: "Khó tập trung tư tưởng, suy giảm khả năng xử lý thông tin trong thời gian ngắn.", 
    severity: 60 
  }
];