- we should defined some trigger for txn records change update version/updated/created/auditLog 
-  * JPA常用装饰器说明:
 * @Entity - 声明一个类为实体类
 * @Table - 指定实体类映射的数据库表信息
 * @Id - 声明一个属性为主键
 * @GeneratedValue - 指定主键生成策略
 * @Column - 指定属性映射的列信息
 * @Temporal - 指定日期类型的映射
 * @Transient - 声明一个属性不需要映射到数据库
 * @Version - 用于乐观锁,指定版本号字段
 * @ManyToOne - 声明多对一关联关系
 * @OneToMany - 声明一对多关联关系  
 * @OneToOne - 声明一对一关联关系
 * @ManyToMany - 声明多对多关联关系
 * @JoinColumn - 指定关联关系的外键列
 * @Enumerated - 指定枚举类型的映射方式
 * @Lob - 指定大对象类型映射
 * @Basic - 声明基本类型映射
 * @Lock(LockModeType.PESSIMISTIC_READ) - 悲观读锁,允许其他事务读但不允许写
 * @Lock(LockModeType.PESSIMISTIC_WRITE) - 悲观写锁,不允许其他事务读写
 * @Lock(LockModeType.PESSIMISTIC_FORCE_INCREMENT) - 强制版本号增加的悲观锁