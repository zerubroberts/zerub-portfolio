import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaSearch, FaChevronRight } from 'react-icons/fa';
import { blogPosts } from '../data/resumeData';
import ParticlesBackground from '../components/ui/ParticlesBackground';

const BlogSection = styled.section`
  padding: var(--space-20) 0;
  background: var(--background);
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  position: relative;
  z-index: 5;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-16);
`;

const PageTitle = styled(motion.h1)`
  font-size: var(--fs-5xl);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: var(--space-3);
  
  span {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  @media (max-width: 768px) {
    font-size: var(--fs-4xl);
  }
`;

const PageDescription = styled(motion.p)`
  max-width: 700px;
  margin: 0 auto;
  font-size: var(--fs-lg);
  color: var(--text-medium);
  line-height: 1.7;
`;

const SearchFilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-12);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-6);
  }
`;

const SearchContainer = styled.div`
  flex: 0 0 350px;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
    flex: auto;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--space-4) var(--space-6);
  padding-left: var(--space-12);
  border-radius: var(--radius-full);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  background: var(--white);
  color: var(--text-dark);
  font-size: var(--fs-md);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-medium);
`;

const CategoryFilters = styled.div`
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CategoryButton = styled.button`
  padding: var(--space-2) var(--space-5);
  background: ${props => props.active ? 'var(--gradient-1)' : 'transparent'};
  color: ${props => props.active ? 'var(--white)' : 'var(--text-medium)'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(var(--primary-rgb), 0.2)'};
  border-radius: var(--radius-full);
  font-size: var(--fs-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.active ? 'var(--shadow-md)' : 'none'};
    background: ${props => props.active ? 'var(--gradient-1)' : 'rgba(var(--primary-rgb), 0.1)'};
    color: ${props => props.active ? 'var(--white)' : 'var(--primary)'};
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.div)`
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--primary-rgb), 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(var(--primary-rgb), 0.3);
  }
`;

const BlogImage = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${BlogCard}:hover img {
    transform: scale(1.05);
  }
`;

const BlogCategory = styled.div`
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  padding: var(--space-1) var(--space-4);
  background: var(--gradient-1);
  color: var(--white);
  border-radius: var(--radius-full);
  font-size: var(--fs-xs);
  font-weight: 600;
  z-index: 1;
  box-shadow: var(--shadow-md);
`;

const BlogContent = styled.div`
  padding: var(--space-6);
`;

const BlogTitle = styled.h3`
  font-size: var(--fs-xl);
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: var(--space-4);
  line-height: 1.4;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  margin-bottom: var(--space-4);
  font-size: var(--fs-sm);
  color: var(--text-medium);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  
  svg {
    color: var(--primary);
  }
`;

const BlogExcerpt = styled.p`
  color: var(--text-medium);
  margin-bottom: var(--space-6);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--secondary);
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: var(--space-16);
  
  h3 {
    font-size: var(--fs-2xl);
    color: var(--text-dark);
    margin-bottom: var(--space-4);
  }
  
  p {
    color: var(--text-medium);
    font-size: var(--fs-lg);
    max-width: 500px;
    margin: 0 auto;
  }
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '100px'};
  height: ${props => props.size || '100px'};
  border-radius: 50%;
  background: ${props => props.bg || 'rgba(var(--primary-rgb), 0.03)'};
  z-index: 1;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

const LoadMore = styled(motion.button)`
  margin: var(--space-12) auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  background: var(--white);
  color: var(--primary);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--fs-md);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-1);
    color: var(--white);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

// Get unique categories from blog posts
const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Filter posts based on search term and category
  useEffect(() => {
    const results = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(results);
    // Reset visible posts count to default when filters change
    setVisiblePosts(6);
  }, [searchTerm, selectedCategory]);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };
  
  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  
  return (
    <BlogSection>
      <ParticlesBackground />
      
      <FloatingCircle 
        size="300px" 
        bg="rgba(var(--primary-rgb), 0.03)" 
        top="10%" 
        right="5%" 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <FloatingCircle 
        size="200px" 
        bg="rgba(var(--secondary-rgb), 0.03)" 
        bottom="20%" 
        left="10%" 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <Container>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blog & <span>Insights</span>
          </PageTitle>
          
          <PageDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thoughts, tutorials, and insights on data science, AI, and visualization techniques
          </PageDescription>
        </PageHeader>
        
        <SearchFilterBar>
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>
          
          <CategoryFilters>
            {categories.map((category, index) => (
              <CategoryButton
                key={index}
                active={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryFilters>
        </SearchFilterBar>
        
        <AnimatePresence mode="wait">
          {displayedPosts.length > 0 ? (
            <BlogGrid>
              {displayedPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogImage>
                    <BlogCategory>{post.category}</BlogCategory>
                    <img src={post.image} alt={post.title} />
                  </BlogImage>
                  
                  <BlogContent>
                    <BlogMeta>
                      <MetaItem>
                        <FaCalendarAlt />
                        <span>{post.date}</span>
                      </MetaItem>
                      
                      <MetaItem>
                        <FaUser />
                        <span>{post.author}</span>
                      </MetaItem>
                    </BlogMeta>
                    
                    <BlogTitle>
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </BlogTitle>
                    
                    <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                    
                    <ReadMoreLink to={`/blog/${post.id}`}>
                      Read More <FaChevronRight />
                    </ReadMoreLink>
                  </BlogContent>
                </BlogCard>
              ))}
            </BlogGrid>
          ) : (
            <NoResults>
              <h3>No results found</h3>
              <p>
                We couldn't find any blog posts matching your search criteria. 
                Try different keywords or browse other categories.
              </p>
            </NoResults>
          )}
        </AnimatePresence>
        
        {filteredPosts.length > visiblePosts && (
          <LoadMore 
            onClick={handleLoadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </LoadMore>
        )}
      </Container>
    </BlogSection>
  );
};

export default Blog; 