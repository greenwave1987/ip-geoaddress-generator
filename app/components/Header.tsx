import { 
  Heading, Flex, Text, Code, Skeleton, 
  Box, Badge, SimpleGrid, Card, Link, List, ListItem 
} from "@radix-ui/themes";
import { Signal } from "@preact/signals-react";

// 定义组件 Props 接口
interface HeaderProps {
  ipLoading: boolean;
  ipError: Error | null;
  ipSignal: Signal<string>;
}

// 模拟环保统计数据（可替换为真实 API 数据）
const ecoStats = {
  animalsSaved: 12500, // 救助动物数量
  treesPlanted: 8500000, // 植树总数
  plasticRemoved: 91000, // 清除塑料重量（公斤）
};

export const Header = ({ ipLoading, ipError, ipSignal }: HeaderProps) => {
  return (
    <Box className="max-w-4xl mx-auto p-6">
      {/* 第一部分：IP地址显示区 */}
      <Heading size="8" textAlign="center" mb="8">
        &#127757; 真实地址生成器
      </Heading>
      
      <Flex gap="4" align="center" justify="center" mb="10" flexWrap="wrap">
        <Text size="4" color="gray">
          您的当前 IP 地址为：
        </Text>
        {ipLoading ? (
          <Skeleton>
            <Code size="4">loading...</Code>
          </Skeleton>
        ) : ipError ? (
          <Text color="red">获取IP失败</Text>
        ) : (
          <Code size="4" backgroundColor="gray" padding="2" borderRadius="md">
            {ipSignal.value}
          </Code>
        )}
      </Flex>

      {/* 第二部分：环保宣言区 */}
      <Box backgroundColor="#f0f9f0" padding="6" borderRadius="md" marginBottom="8">
        <Heading as="h2" size="6" color="#2e7d32" marginBottom="4">
          &#128062; 没有买卖就没有杀戮 —— 保护野生动物，守护地球家园
        </Heading>
        <Text lineHeight="1.8" color="#4a5568">
          每一次非法交易都在将濒危物种推向灭绝边缘。拒绝象牙、犀角、穿山甲鳞片等制品，
          支持可持续替代品，是我们对自然的承诺。
        </Text>
      </Box>

      {/* 第三部分：环保数据统计卡片 */}
      <Heading as="h3" size="5" color="#2d3748" marginBottom="6" textAlign="center">
        &#128202; 全球环保进展（模拟数据）
      </Heading>
      
      <SimpleGrid columns={{ sm: 1, md: 3 }} gap="6" marginBottom="10">
        <Card variant="surface">
          <Box padding="4" textAlign="center">
            <Badge color="green" marginBottom="2">已恢复</Badge>
            <Heading as="h4" size="3" color="#2f4f4f">{ecoStats.animalsSaved.toLocaleString()}+</Heading>
            <Text size="2" color="gray">野生动物个体被成功保护</Text>
          </Box>
        </Card>
        
        <Card variant="surface">
          <Box padding="4" textAlign="center">
            <Badge color="teal" marginBottom="2">已种植</Badge>
            <Heading as="h4" size="3" color="#2f4f4f">{(ecoStats.treesPlanted / 1000000).toFixed(1)}M</Heading>
            <Text size="2" color="gray">树木总量（百万棵）</Text>
          </Box>
        </Card>
        
        <Card variant="surface">
          <Box padding="4" textAlign="center">
            <Badge color="orange" marginBottom="2">待解决</Badge>
            <Heading as="h4" size="3" color="#2f4f4f">{ecoStats.plasticRemoved}吨</Heading>
            <Text size="2" color="gray">海洋塑料垃圾已被清除</Text>
          </Box>
        </Card>
      </SimpleGrid>

      {/* 第四部分：行动号召按钮 */}
      <Flex justify="center" gap="6" marginBottom="10">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          &#127807; 参与环保行动
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          &#128062; 支持野生动物保护
        </button>
      </Flex>

      {/* 第五部分：环保小知识列表 */}
      <Box backgroundColor="#f8fafc" padding="6" borderRadius="md">
        <Heading as="h3" size="5" color="#2d3748" marginBottom="4">
          &#128161; 你知道吗？
        </Heading>
        <List spaceY="4">
          <ListItem>
            <Text><strong>大象记忆超群</strong> – 它们能记住水源位置长达数年之久，帮助整个族群生存。</Text>
          </ListItem>
          <ListItem>
            <Text><strong>蜜蜂授粉价值</strong> – 全球约75%的农作物依赖蜜蜂等昆虫授粉，它们是粮食安全的守护者。</Text>
          </ListItem>
          <ListItem>
            <Text><strong>珊瑚礁生态</strong> – 仅占海洋面积不到1%的珊瑚礁，却是25%海洋生物的栖息地。</Text>
          </ListItem>
          <ListItem>
            <Text><strong>森林碳汇作用</strong> – 全球森林每年吸收约20亿吨二氧化碳，相当于全球排放量的1/6。</Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
