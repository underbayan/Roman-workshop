# acl
 - 区别ugo -user-group-other
 - 有自己的一套 user group mask 和ohter，只是 user 和group可以有多个数值。 mask 掩码表示user和group的可以拥有的最高权限
  
# casbin
- ACL, RBAC, ABAC , not support PBAC

# ts type
- partial record pick omit extend interface enum Exclude Extract NonNullable ReturnType InstanceType readonly diff overlap purify required 

# sec
- Embrace linter security rules
- Limit concurrent requests using a middleware( eslint-plugin-security )
- Extract secrets from config files or use packages to encrypt them (Vault products)
- Prevent query injection vulnerabilities with ORM/ODM libraries
- Avoid DOS attacks 
- Adjust the HTTP response headers for enhanced security
- Constantly and automatically inspect for vulnerable dependencies( npm audit)
- Avoid using the Node.js crypto library for handling passwords, use Bcrypt
- Limit the allowed login requests of each user
- Run Node.js as non-root user
- Limit payload size using a reverse-proxy or a middleware
- Prevent evil RegEx from overloading your single thread execution
- Avoid JavaScript eval statements
- Avoid module loading using a variable
- Run unsafe code in a sandbox
- Take extra care when working with child processes
- Hide error details from clients
- Configure 2FA for npm or Yarn
-  Modify session middleware settings

# perf for web server 
- request Per second rps
- Error rate
- cpu Utilliztion
- bytes per seconds
- average response times ART
- peak response Time
- the count of Threads
- uptime
- memory utilization
- the count fo open files descriptions
-  Machine: EX41S-SSD, Intel Core i7, 4Ghz, 64GB RAM, 4C/8T, SSD. Method:: autocannon -c 100 -d 40 -p 10 localhost:3000 * 2, taking the second average
   | Framework   | Version | Router? | Requests/sec |
   | ----------- | ------- | ------- | ------------ |
   | hapi        | 18.1.0  | ✓       | 29,998       |
   | Express     | 4.16.4  | ✓       | 38,510       |
   | Restify     | 8.0.0   | ✓       | 39,331       |
   | Koa         | 2.7.0   | ✗       | 50,933       |
   | Fastify     | 2.0.0   | ✓       | 76,835       |
   | http.Server | 10.15.2 | ✗       | 71,768       |
        --------------------------

