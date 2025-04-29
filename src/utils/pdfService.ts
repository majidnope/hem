const PDF_SERVER_URL = 'http://localhost:4000';

export interface SearchResult {
  source: string;
  content: string;
}

export const pdfService = {
  async indexPdfs(): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`${PDF_SERVER_URL}/api/pdf/index`, {
        method: 'POST',
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error indexing PDFs:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  },
  
  async searchPdfs(query: string): Promise<{ 
    success: boolean; 
    results?: SearchResult[]; 
    error?: string 
  }> {
    try {
      const response = await fetch(`${PDF_SERVER_URL}/api/pdf/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error searching PDFs:', error);
      return { 
        success: false, 
        results: [],
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
} 