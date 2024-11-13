# 1. Cài đặt Prisma và Prisma Client
npm install prisma @prisma/client

# 2. Khởi tạo Prisma và tạo file schema.prisma, .env
npx prisma init

# 3. Định nghĩa các model trong schema.prisma
# (chỉnh sửa file prisma/schema.prisma)

# 4. Tạo migration và cập nhật cơ sở dữ liệu, đặt tên thay đổi tuỳ ý
npx prisma migrate dev --name <migration_name>  ()

# 5. Khởi chạy Prisma Studio để kiểm tra dữ liệu
npx prisma studio
