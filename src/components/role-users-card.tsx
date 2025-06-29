export const RoleUsersCard: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="flex w-[180px] h-[40px] relative">
      {images.slice(0, 5).map((image, idx) => (
        <img
          key={idx}
          className="w-10 h-10 absolute top-0"
          src={image}
          alt=""
          style={{
            left: 28 * idx,
          }}
        />
      ))}
      {images.length > 5 && (
        <div
          className="relative w-10 h-10 bg-gray-50 border-2 border-white rounded-full flex justify-center items-center font-medium text-gray-600"
          style={{ left: 28 * 5 }}
        >
          +{images.length - 5}
        </div>
      )}
    </div>
  );
};
