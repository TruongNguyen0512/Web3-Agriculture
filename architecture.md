# System Architecture

The system architecture is designed with multiple layers to ensure scalability, security, and efficient data management.

## Architecture Diagram

```mermaid
flowchart TD
    subgraph Users["User Layer"]
        Farmer["Nông dân\n- Cập nhật thông tin\n- Quản lý sản phẩm"]
        Consumer["Người tiêu dùng\n- Truy xuất thông tin\n- Đánh giá sản phẩm"]
        Admin["Admin\n- Quản lý hệ thống\n- Phê duyệt"]
    end

    subgraph Frontend["Frontend Layer"]
        WebApp["Web Application\n(React + TailwindCSS)"]
        MobileApp["Mobile App\n(React Native)"]
        
        subgraph FE-Components["Core Components"]
            UI["UI Components"]
            Web3["Web3 Integration\n(ethers.js)"]
            StateManagement["State Management\n(Redux)"]
        end
    end

    subgraph Backend["Backend Layer"]
        API["API Gateway\n(Node.js + Express)"]
        
        subgraph Services["Microservices"]
            AuthService["Authentication Service\n- JWT\n- Role Management"]
            ProductService["Product Service\n- CRUD Operations\n- Validation"]
            TraceService["Traceability Service\n- Chain of Custody\n- History"]
            NotificationService["Notification Service\n- Email\n- Push Notifications"]
        end
        
        subgraph Cache["Caching Layer"]
            Redis["Redis\n- Session Data\n- Frequent Queries"]
        end
        
        subgraph Queue["Message Queue"]
            RabbitMQ["RabbitMQ\n- Async Processing\n- Event Handling"]
        end
    end

    subgraph Storage["Storage Layer"]
        MongoDB[(MongoDB\n- User Data\n- Product Info)]
        IPFS[(IPFS\n- Images\n- Documents)]
    end

    subgraph Blockchain["Blockchain Layer"]
        subgraph Contracts["Smart Contracts"]
            ProductContract["Product Contract\n- Product Registry\n- Ownership"]
            TraceContract["Trace Contract\n- History\n- Verification"]
        end
        
        subgraph Chain["Chain Infrastructure"]
            BSC["BSC Network"]
            EventListener["Event Listener\n- Monitor Events\n- Update Status"]
        end
    end

    subgraph External["External Services"]
        QRService["QR Service"]
        EmailService["Email Provider"]
        CloudStorage["Cloud Storage"]
        Analytics["Analytics Platform"]
    end

    %% Connections
    Farmer --> WebApp & MobileApp
    Consumer --> WebApp & MobileApp
    Admin --> WebApp
    
    WebApp & MobileApp --> FE-Components
    FE-Components --> API
    
    API --> Services
    Services --> Cache
    Services --> Queue
    Services --> Storage
    Services --> Contracts
    
    Contracts --> Chain
    EventListener --> Chain
    EventListener --> API
    
    Services --> External

    %% Styles
    classDef primary fill:#f9f,stroke:#333,stroke-width:2px
    classDef secondary fill:#bbf,stroke:#333,stroke-width:2px
    classDef storage fill:#bfb,stroke:#333,stroke-width:2px
    
    class Users,Frontend,Backend primary
    class Storage,Blockchain secondary
    class External storage
```

## Key Components

1. User Layer
   - Farmers: Update information and manage products
   - Consumers: Track products and provide feedback
   - Admins: System management and approval

2. Frontend Layer
   - Web Application (React + TailwindCSS)
   - Mobile Application (React Native)
   - Core Components including Web3 integration