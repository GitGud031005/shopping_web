const GameDetail = () => {
    return (
        <div className="h-auto mt-20 flex gap-16 mb-16">
            <div className="flex-3 ml-10">
                <span className="text-2xl font-medium block mb-6">
                    Giới thiệu về Game Hollow Knight – Nintendo Switch
                </span>
                <p className="text-xl text-justify leading-8 mb-6">
                    <strong className="inline-block">Hollow Knight</strong> là tựa game hành động – phiêu lưu được đánh giá cao trong thể loại <strong>Metroidvania</strong>, nơi bạn vào vai một chiến binh không tên khám phá vùng đất ngầm bí ẩn Hallownest. Với lối chơi khám phá không tuyến tính, cơ chế chiến đấu mượt mà và thế giới được xây dựng tỉ mỉ, <strong className="inline-block">Hollow Knight</strong> không chỉ là một cuộc phiêu lưu, mà là một tác phẩm nghệ thuật.
                </p>
                <span className="text-xl font-semibold block mb-8">
                    Tính năng nổi bật:
                </span>
                <ul className="list-disc text-xl text-justify leading-8 ml-6">
                    <li className="mb-8">
                        <strong>Thế giới mở đầy bí ẩn:</strong> Hallownest là một mê cung rộng lớn với nhiều khu vực khác nhau – từ hang động u ám đến thành phố đổ nát – tất cả đều liên kết chặt chẽ.
                    </li>
                    <li className="mb-8">
                        <strong>Chiến đấu mượt mà, chính xác:</strong> Đối đầu với hàng trăm kẻ thù và boss độc đáo đòi hỏi kỹ năng và chiến thuật.
                    </li>
                    <li className="mb-8">
                        <strong>Hệ thống nâng cấp đa dạng:</strong> Mở khóa kỹ năng, trang bị bùa chú (Charms) và mở rộng khả năng chiến đấu theo phong cách riêng.
                    </li>
                    <li className="mb-8">
                        <strong>Đồ họa vẽ tay & âm thanh ám ảnh:</strong> Phong cách nghệ thuật tối giản nhưng đầy cảm xúc, kết hợp nhạc nền sâu lắng tạo nên không khí mê hoặc khó quên.
                    </li>
                </ul>
                <span className="text-xl font-semibold block mb-8">
                    Lý do chọn mua:
                </span>
                <ul className="list-disc text-xl text-justify leading-8 ml-6">
                    <li className="mb-8">
                        Một trong những game indie xuất sắc nhất mọi thời đại, được đánh giá cao bởi cả giới phê bình và cộng đồng game thủ
                    </li>
                    <li className="mb-8">
                        Gameplay có chiều sâu, phù hợp cho cả người chơi thích khám phá lẫn những ai mê thử thách
                    </li>
                    <li className="mb-8">
                        Đồ họa và âm thanh tinh tế – tạo nên một thế giới đậm chất huyền bí và cảm xúc
                    </li>
                </ul>
                <p className="text-xl text-justify leading-8 mb-6">
                    <strong>Hollow Knight</strong> không chỉ là một cuộc phiêu lưu – đó là hành trình tìm lại ánh sáng trong bóng tối sâu thẳm.
                </p>
                <span className="text-2xl font-medium block mb-6">
                    HƯỚNG DẪN CHƠI GAME
                </span>
                <div className="w-full">
                    <iframe className="aspect-video" src="https://www.youtube.com/embed/G1atkq4C1KU?si=2f9vrQYD4TH_Irry" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className="flex-2 ">
                <div className="w-full border-gray-200 border-1 rounded-2xl py-4 text-3xl font-bold pl-4 mb-4">
                    Thông tin game
                </div>
                <table className="border-collapse w-full">
                    <tbody>
                        <tr>
                            <td className="font-semibold py-4 border border-gray-200 border-t-0 border-l-0 text-left">Thể loại</td>
                            <td className="pl-4 border border-gray-200 border-t-0 border-r-0">Metroidvania, Souls-like, Platformer, Difficult, Indie,...</td>
                        </tr>
                        <tr>
                            <td className="font-semibold py-4 border border-gray-200 border-l-0">Hệ máy</td>
                            <td className="pl-4 bg-gray-100 border border-gray-200 border-r-0">PC, PS5, PS4, Xbox, Nintendo Switch</td>
                        </tr>
                        <tr>
                            <td className="font-semibold py-4 border border-gray-200 border-l-0">ESRB</td>
                            <td className="pl-4 border border-gray-200 border-r-0">10+</td>
                        </tr>
                        <tr>
                            <td className="font-semibold py-4 border border-gray-200 border-l-0">Ngày phát hành</td>
                            <td className="pl-4 bg-gray-100 border border-gray-200 border-r-0">25 Feb, 2017</td>
                        </tr>
                        <tr>
                            <td className="font-semibold py-4 border border-gray-200 border-l-0">Số người chơi</td>
                            <td className="pl-4 border border-gray-200 border-r-0">1 người</td>
                        </tr>
                        <tr>
                            <td className="font-semibold py-4 border border-gray-200 border-l-0">Nhà sản xuất</td>
                            <td className="pl-4 bg-gray-100 border border-gray-200 border-r-0">Team Cherry</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GameDetail