import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatContent = (content) => {
    // Convert markdown-like content to JSX
    const lines = content.split('\n').filter(line => line.trim());
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold mb-6 text-cyan-400 cyber-glow">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mb-4 mt-8 text-cyan-300">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mb-3 mt-6 text-cyan-200">{line.substring(4)}</h3>;
      } else if (line.trim()) {
        return <p key={index} className="mb-4 text-gray-300 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  if (selectedPost) {
    return (
      <div className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => setSelectedPost(null)}
            className="mb-8 bg-cyan-600 hover:bg-cyan-700 text-white cyber-button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6 cyber-border"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-cyan-600 text-white">{selectedPost.category}</Badge>
                {selectedPost.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="border-cyan-400 text-cyan-400">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-5xl font-bold mb-6 text-cyan-400 cyber-glow">
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {selectedPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(selectedPost.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert prose-cyan max-w-none">
              {formatContent(selectedPost.content)}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 cyber-glow">
            <span className="text-cyan-400">Tech</span> Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge technologies, industry insights, and innovative solutions 
            from our team of experts across all our specialties.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cyber-button ${
                selectedCategory === category 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Card 
              key={post.id} 
              className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cyber-card group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map(tag => (
                    <Badge key={tag} variant="outline" className="border-cyan-400/30 text-cyan-400 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white cyber-button group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
