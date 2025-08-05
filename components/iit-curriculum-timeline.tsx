'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Database, Server, Code, Calculator, FileText, Award, CheckCircle, Circle } from 'lucide-react';
import { iitCurriculum, getCoursesByLevel, getCompletionStats, type Course } from '@/lib/curriculum-data';
import { Badge } from './ui/badge';
import { TracingBeam } from './ui/tracing-beam';

const getCategoryIcon = (category: Course['category']) => {
  switch (category) {
    case 'Mathematics':
      return Calculator;
    case 'Statistics':
      return Database;
    case 'Computer Science':
      return Code;
    case 'English':
      return FileText;
    case 'Management':
      return Server;
    case 'Skill Enhancement':
      return Award;
    default:
      return BookOpen;
  }
};

const getLevelColor = (level: Course['level']) => {
  switch (level) {
    case 'Foundation':
      return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
    case 'Diploma':
      return 'bg-green-500/20 border-green-500/30 text-green-400';
    case 'Degree':
      return 'bg-purple-500/20 border-purple-500/30 text-purple-400';
    default:
      return 'bg-primary/20 border-primary/30 text-primary';
  }
};

export default function IITCurriculumTimeline() {
  const stats = getCompletionStats();
  const foundationCourses = getCoursesByLevel('Foundation');
  const diplomaCourses = getCoursesByLevel('Diploma');
  const degreeCourses = getCoursesByLevel('Degree');

  // Separate diploma courses by track
  const programmingCourses = diplomaCourses.filter(course => 
    ['BSCS2001', 'BSCS2002', 'BSCS2003', 'BSCS2003P', 'BSCS2005', 'BSCS2006', 'BSCS2006P', 'BSSE2001'].includes(course.code)
  );
  const dataScienceCourses = diplomaCourses.filter(course => 
    ['BSCS2004', 'BSMS2001', 'BSMS2001P', 'BSCS2007', 'BSCS2008', 'BSCS2008P', 'BSMS2002', 'BSSE2002'].includes(course.code)
  );
  const nptelCourses = diplomaCourses.filter(course => 
    course.code.startsWith('NPTEL-')
  );

  const renderCourseSection = (courses: Course[], sectionTitle: string, sectionDescription: string) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold font-orbitron text-primary mb-4">{sectionTitle}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">{sectionDescription}</p>
        <div className="mt-4 flex justify-center gap-4 text-sm">
          <span className="text-muted-foreground">
            Completed: {courses.filter(c => c.completed).length}/{courses.length} courses
          </span>
          <span className="text-muted-foreground">
            Credits: {courses.filter(c => c.completed).reduce((sum, c) => sum + c.credits, 0)}/{courses.reduce((sum, c) => sum + c.credits, 0)}
          </span>
        </div>
      </div>
      
      <div className="space-y-8">
        {courses.map((course, index) => {
          const Icon = getCategoryIcon(course.category);
          
          return (
            <div key={course.code} className="flex items-start gap-6">
              <div className="relative">
                <div className={cn('rounded-lg p-3 flex items-center justify-center border', getLevelColor(course.level))}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-bold font-orbitron text-primary-foreground">{course.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs font-mono">{course.code}</Badge>
                      <Badge variant="secondary" className="text-xs">{course.credits} Credits</Badge>
                      <Badge variant="outline" className="text-xs">{course.category}</Badge>
                    </div>
                  </div>
                  {course.completed ? (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">
                      <Circle className="w-3 h-3 mr-1" />
                      Pending
                    </Badge>
                  )}
                </div>
                
                {course.description && (
                  <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
                )}
                
                {(course.prerequisites || course.corequisites) && (
                  <div className="text-xs text-muted-foreground space-y-1">
                    {course.prerequisites && (
                      <div>
                        <span className="font-medium">Prerequisites:</span> {course.prerequisites.join(', ')}
                      </div>
                    )}
                    {course.corequisites && (
                      <div>
                        <span className="font-medium">Corequisites:</span> {course.corequisites.join(', ')}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Progress Stats */}
      <div className="text-center mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{stats.completedCourses}</div>
            <div className="text-sm text-muted-foreground">Courses Completed</div>
          </div>
          <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{stats.completedCredits}</div>
            <div className="text-sm text-muted-foreground">Credits Earned</div>
          </div>
          <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">{stats.completionPercentage}%</div>
            <div className="text-sm text-muted-foreground">Progress</div>
          </div>
          <div className="bg-background/50 border border-primary/20 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">IIT Madras</div>
            <div className="text-sm text-muted-foreground">Institution</div>
          </div>
        </div>
      </div>

      <TracingBeam className="px-6">
        {/* Course Sections */}
        {renderCourseSection(
          foundationCourses,
          '1st Year',
          'Building fundamental knowledge in mathematics, statistics, programming, and communication skills essential for data science.'
        )}
        
        {renderCourseSection(
          programmingCourses,
          '2nd Year - Diploma in Programming',
          'Specialized track focusing on databases, data structures, algorithms, and full-stack web application development.'
        )}
        
        {renderCourseSection(
          dataScienceCourses,
          '3rd Year - Diploma in Data Science',
          'Specialized track in machine learning, business analytics, and data management for comprehensive data science expertise.'
        )}
        
        {renderCourseSection(
          nptelCourses,
          '3rd Year - NPTEL Specialization',
          'Advanced specialization courses from NPTEL covering cloud computing, data mining, and quantitative finance.'
        )}
        
        {renderCourseSection(
          degreeCourses,
          '4th Year - Degree Level',
          'Advanced courses in software engineering, artificial intelligence, and deep learning for comprehensive expertise.'
        )}
      </TracingBeam>
    </div>
  );
}