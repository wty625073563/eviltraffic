interface MediaCardProps {
  children: React.ReactNode
}

export const MediaCard: React.FC<MediaCardProps> = ({ children }) => {
  return (
    <div>
      {/* 这里可以根据需要对 children 进行处理 */}
      {children}
    </div>
  )
}
